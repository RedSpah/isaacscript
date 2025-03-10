import {
  getTypeName,
  isTypeReferenceType,
} from "@typescript-eslint/type-utils";
import { ESLintUtils, TSESTree } from "@typescript-eslint/utils";
import * as ts from "typescript";
import { isSymbolFlagSet, isTypeFlagSet, unionTypeParts } from "../typeUtils";
import { createRule } from "../utils";

/**
 * TypeScript only allows number enums, string enums, or mixed enums with both numbers and strings.
 *
 * Mixed enums are a union of a number enum and a string enum, so there is no separate kind for
 * them.
 */
enum EnumKind {
  NON_ENUM,
  HAS_NUMBER_VALUES,
  HAS_STRING_VALUES,
}

/** These operators are always considered to be safe. */
const ALLOWED_ENUM_OPERATORS = new Set([
  "in",
  "|",
  "&",
  "|=",
  "&=",
  ">>",
  "<<",
  ">>>",
]);

/**
 * See the comment for `EnumKind`.
 *
 * This rule can safely ignore specific kinds of types (and leave the validation in question to the
 * TypeScript compiler).
 */
const IMPOSSIBLE_ENUM_TYPES =
  ts.TypeFlags.BooleanLike |
  ts.TypeFlags.NonPrimitive |
  ts.TypeFlags.ESSymbolLike;

const ALLOWED_TYPES_FOR_ANY_ENUM_ARGUMENT =
  ts.TypeFlags.Any |
  ts.TypeFlags.Unknown |
  ts.TypeFlags.Number |
  ts.TypeFlags.String;

export type Options = [];

export type MessageIds =
  | "incorrectIncrement"
  | "mismatchedAssignment"
  | "mismatchedComparison"
  | "mismatchedFunctionArgument";

export const strictEnums = createRule<Options, MessageIds>({
  name: "strict-enums",
  meta: {
    type: "problem",
    docs: {
      description: "Disallows the usage of unsafe enum patterns",
      recommended: "error",
      requiresTypeChecking: true,
    },
    schema: [],
    messages: {
      incorrectIncrement: "You cannot increment or decrement an enum type.",
      mismatchedAssignment:
        "The type of the enum assignment does not match the declared enum type of the variable.",
      mismatchedComparison:
        "The two things in the comparison do not have a shared enum type.",
      mismatchedFunctionArgument:
        "The {{ ordinal }} argument in the function call does not match the declared enum type of the function signature.\nArgument: {{ type1 }}\nParameter: {{ type2 }}",
    },
  },
  defaultOptions: [],
  create(context) {
    const parserServices = ESLintUtils.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();

    // ----------------
    // Helper functions
    // ----------------

    /**
     * If passed an enum member, returns the type of the parent. Otherwise, returns itself.
     *
     * For example:
     * - `Fruit` --> `Fruit`
     * - `Fruit.Apple` --> `Fruit`
     */
    function getBaseEnumType(type: ts.Type): ts.Type {
      const symbol = type.getSymbol();
      if (symbol === undefined) {
        return type;
      }

      if (!isSymbolFlagSet(symbol, ts.SymbolFlags.EnumMember)) {
        return type;
      }

      const { valueDeclaration } = symbol;
      if (valueDeclaration === undefined) {
        return type;
      }

      const parentType = getTypeFromTSNode(valueDeclaration.parent);
      return parentType;
    }

    /** See the comment for the `EnumKind` enum. */
    function getEnumKind(type: ts.Type): EnumKind {
      if (type.isUnion()) {
        throw new Error(
          'The "getEnumKind" function is not meant to be used on unions. Use the "getEnumKinds" function instead.',
        );
      }

      if (type.isIntersection()) {
        throw new Error(
          'The "getEnumKind" function is not meant to be used on intersections.',
        );
      }

      if (!isEnum(type)) {
        return EnumKind.NON_ENUM;
      }

      const isStringLiteral = isTypeFlagSet(type, ts.TypeFlags.StringLiteral);
      const isNumberLiteral = isTypeFlagSet(type, ts.TypeFlags.NumberLiteral);

      if (isStringLiteral && !isNumberLiteral) {
        return EnumKind.HAS_STRING_VALUES;
      }

      if (isNumberLiteral && !isStringLiteral) {
        return EnumKind.HAS_NUMBER_VALUES;
      }

      throw new Error(
        "Failed to derive the type of enum, since it did not have string values or number values.",
      );
    }

    /**
     * Returns a set containing the single `EnumKind` (if it is not a union), or a set containing N
     * `EnumKind` (if it is a union).
     */
    function getEnumKinds(type: ts.Type): Set<EnumKind> {
      if (type.isUnion()) {
        const subTypes = unionTypeParts(type);
        const enumKinds = subTypes.map((subType) => getEnumKind(subType));
        return new Set(enumKinds);
      }

      if (type.isIntersection()) {
        throw new Error(
          "The getEnumKinds function is not meant to be used on intersections.",
        );
      }

      const enumKind = getEnumKind(type);
      return new Set([enumKind]);
    }

    /**
     * A thing can have 0 or more enum types. For example:
     * - 123 --> []
     * - {} --> []
     * - Fruit.Apple --> [Fruit]
     * - Fruit.Apple | Vegetable.Lettuce --> [Fruit, Vegetable]
     * - Fruit.Apple | Vegetable.Lettuce | 123 --> [Fruit, Vegetable]
     * - T extends Fruit --> [Fruit]
     */
    function getEnumTypes(type: ts.Type): Set<ts.Type> {
      /**
       * First, we get all the parts of the union. For non-union types, this will be an array with
       * the type in it. For example:
       * - Fruit --> [Fruit]
       * - Fruit | Vegetable --> [Fruit, Vegetable]
       */
      const subTypes = unionTypeParts(type);

      /**
       * Next, we must resolve generic types with constraints. For example:
       * - Fruit --> Fruit
       * - T extends Fruit --> Fruit
       */
      const subTypesConstraints = subTypes.map((subType) => {
        const constraint = subType.getConstraint();
        return constraint === undefined ? subType : constraint;
      });

      const enumSubTypes = subTypesConstraints.filter((subType) =>
        isEnum(subType),
      );
      const baseEnumSubTypes = enumSubTypes.map((subType) =>
        getBaseEnumType(subType),
      );
      return new Set(baseEnumSubTypes);
    }

    /** Given a set A and set B, return a set that contains only elements that are in both sets. */
    function getIntersectingSet<T>(a: Set<T>, b: Set<T>): Set<T> {
      const intersectingValues = [...a.values()].filter((value) =>
        b.has(value),
      );
      return new Set(intersectingValues);
    }

    /**
     * From:
     * https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
     */
    function getOrdinalSuffix(i: number): string {
      const j = i % 10;
      const k = i % 100;
      if (j === 1 && k !== 11) {
        return `${i}st`;
      }
      if (j === 2 && k !== 12) {
        return `${i}nd`;
      }
      if (j === 3 && k !== 13) {
        return `${i}rd`;
      }
      return `${i}th`;
    }

    function getTypeFromNode(node: TSESTree.Node): ts.Type {
      const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
      return getTypeFromTSNode(tsNode);
    }

    function getTypeFromTSNode(tsNode: ts.Node): ts.Type {
      return checker.getTypeAtLocation(tsNode);
    }

    function hasEnumTypes(type: ts.Type): boolean {
      const enumTypes = getEnumTypes(type);
      return enumTypes.size > 0;
    }

    function hasIntersection(type: ts.Type): boolean {
      if (type.isIntersection()) {
        return true;
      }

      if (type.isUnion()) {
        const subTypes = unionTypeParts(type);
        for (const subType of subTypes) {
          if (subType.isIntersection()) {
            return true;
          }
        }
      }

      return false;
    }

    function isEnum(type: ts.Type): boolean {
      /** The "EnumLiteral" flag will be set on both enum base types and enum members/values. */
      return isTypeFlagSet(type, ts.TypeFlags.EnumLiteral);
    }

    function isNullOrUndefinedOrAnyOrUnknownOrNever(
      ...types: ts.Type[]
    ): boolean {
      return types.some((type) =>
        isTypeFlagSet(
          type,
          ts.TypeFlags.Null |
            ts.TypeFlags.Undefined |
            ts.TypeFlags.Any |
            ts.TypeFlags.Unknown |
            ts.TypeFlags.Never,
        ),
      );
    }

    function isNumber(type: ts.Type): boolean {
      /** The "NumberLike" flag will be set on both number literals and number variables. */
      return isTypeFlagSet(type, ts.TypeFlags.NumberLike);
    }

    function isString(type: ts.Type): boolean {
      /** The "StrikeLike" flag will be set on both string literals and string variables. */
      return isTypeFlagSet(type, ts.TypeFlags.StringLike);
    }

    function setHasAnyElementFromSet<T>(set1: Set<T>, set2: Set<T>): boolean {
      for (const value of set2.values()) {
        if (set1.has(value)) {
          return true;
        }
      }

      return false;
    }

    // --------------
    // Main functions
    // --------------

    function checkCallExpression(
      node: TSESTree.CallExpression | TSESTree.NewExpression,
    ) {
      const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
      const signature = checker.getResolvedSignature(tsNode);
      if (signature === undefined) {
        return;
      }

      const declaration = signature.getDeclaration();
      // The `getDeclaration` method actually returns `ts.SignatureDeclaration | undefined`, not
      // `ts.SignatureDeclaration`.
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (declaration === undefined) {
        return;
      }

      // First, determine if this is a function with a `this` parameter.
      let firstParamIsThis = false;
      const firstParameter = declaration.parameters[0];
      if (firstParameter !== undefined) {
        const parameterName = firstParameter.name.getText();
        firstParamIsThis = parameterName === "this";
      }

      /**
       * Iterate through the arguments provided to the call function and cross reference their types
       * to the types of the "real" function parameters.
       */
      for (let i = 0; i < node.arguments.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const argument = node.arguments[i]!;
        const argumentType = getTypeFromNode(argument);
        let parameterType = signature.getTypeParameterAtPosition(i);

        /**
         * If this function parameter is a generic type that extends another type, we want to
         * compare the calling argument to the constraint instead.
         *
         * For example:
         *
         * ```ts
         * function useFruit<FruitType extends Fruit>(fruitType: FruitType) {}
         * useFruit(0)
         * ```
         *
         * Here, we want to compare `Fruit.Apple` to `Fruit`, not `FruitType`, because `FruitType`
         * would just be equal to 0 in this case (and would be unsafe).
         *
         * Finally, if the function has a `this` parameter, getting a constraint will mess things
         * up, so we skip checking for a constraint if this is the case.
         */
        if (!firstParamIsThis) {
          const parameter = declaration.parameters[i];
          if (parameter !== undefined) {
            const parameterTSNode = getTypeFromTSNode(parameter);
            const constraint = parameterTSNode.getConstraint();
            if (constraint !== undefined) {
              parameterType = constraint;
            }
          }
        }

        /**
         * Disallow mismatched function calls, like the following:
         *
         * ```ts
         * function useFruit(fruit: Fruit) {}
         * useFruit(0);
         * ```
         */
        if (isMismatchedEnumFunctionArgument(argumentType, parameterType)) {
          context.report({
            node: argument,
            messageId: "mismatchedFunctionArgument",
            data: {
              ordinal: getOrdinalSuffix(i + 1), // e.g. 0 --> 1st
              type1: getTypeName(checker, argumentType),
              type2: getTypeName(checker, parameterType),
            },
          });
        }
      }
    }

    function isAssigningNonEnumValueToEnumVariable(
      leftType: ts.Type,
      rightType: ts.Type,
    ): boolean {
      /**
       * First, recursively check for containers like the following:
       *
       * ```ts
       * declare let fruits: Fruit[];
       * fruits = [0, 1];
       * ```
       */
      if (isTypeReferenceType(leftType) && isTypeReferenceType(rightType)) {
        const leftTypeArguments = checker.getTypeArguments(leftType);
        const rightTypeArguments = checker.getTypeArguments(rightType);

        for (let i = 0; i < leftTypeArguments.length; i++) {
          const leftTypeArgument = leftTypeArguments[i];
          const rightTypeArgument = rightTypeArguments[i];
          if (
            leftTypeArgument === undefined ||
            rightTypeArgument === undefined
          ) {
            continue;
          }

          if (
            isAssigningNonEnumValueToEnumVariable(
              leftTypeArgument,
              rightTypeArgument,
            )
          ) {
            return true;
          }
        }

        return false;
      }

      const leftEnumTypes = getEnumTypes(leftType);
      if (leftEnumTypes.size === 0) {
        // This is not an enum assignment.
        return false;
      }

      /**
       * As a special case, allow assignment of certain types that the TypeScript compiler should
       * handle properly.
       */
      if (isNullOrUndefinedOrAnyOrUnknownOrNever(rightType)) {
        return false;
      }

      const rightEnumTypes = getEnumTypes(rightType);
      const intersectingTypes = getIntersectingSet(
        leftEnumTypes,
        rightEnumTypes,
      );
      return intersectingTypes.size === 0;
    }

    /** Returns whether or not the two provided types have a shared enum. */
    function typesHaveLooseEnumUsage(
      leftType: ts.Type,
      rightType: ts.Type,
    ): boolean {
      /** Allow comparisons that don't have anything to do with enums. */
      const leftEnumTypes = getEnumTypes(leftType);
      const rightEnumTypes = getEnumTypes(rightType);
      if (leftEnumTypes.size === 0 && rightEnumTypes.size === 0) {
        return false;
      }

      /**
       * Allow comparisons to any intersection. Enum intersections would be rare in real-life code,
       * so they are out of scope for this rule.
       */
      if (hasIntersection(leftType) || hasIntersection(rightType)) {
        return false;
      }

      /**
       * Allow comparisons to things with a type that can never be an enum (like a function).
       *
       * (The TypeScript compiler should properly type-check these cases, so the lint rule is
       * unneeded.)
       */
      if (
        isTypeFlagSet(leftType, IMPOSSIBLE_ENUM_TYPES) ||
        isTypeFlagSet(rightType, IMPOSSIBLE_ENUM_TYPES)
      ) {
        return false;
      }

      /**
       * Allow exact comparisons to some standard types, like null and undefined.
       *
       * (The TypeScript compiler should properly type-check these cases, so the lint rule is
       * unneeded.)
       */
      if (isNullOrUndefinedOrAnyOrUnknownOrNever(leftType, rightType)) {
        return false;
      }

      /**
       * Allow number enums to be compared with strings and string enums to be compared with
       * numbers.
       *
       * (The TypeScript compiler should properly type-check these cases, so the lint rule is
       * unneeded.)
       */
      const leftEnumKinds = getEnumKinds(leftType);
      const rightEnumKinds = getEnumKinds(rightType);
      if (
        leftEnumKinds.has(EnumKind.HAS_STRING_VALUES) &&
        leftEnumKinds.size === 1 &&
        isNumber(rightType)
      ) {
        return false;
      }
      if (
        leftEnumKinds.has(EnumKind.HAS_NUMBER_VALUES) &&
        leftEnumKinds.size === 1 &&
        isString(rightType)
      ) {
        return false;
      }
      if (
        rightEnumKinds.has(EnumKind.HAS_STRING_VALUES) &&
        rightEnumKinds.size === 1 &&
        isNumber(leftType)
      ) {
        return false;
      }
      if (
        rightEnumKinds.has(EnumKind.HAS_NUMBER_VALUES) &&
        rightEnumKinds.size === 1 &&
        isString(leftType)
      ) {
        return false;
      }

      // Allow passing number literals if there are number literals in the actual function type.
      if (isNumber(leftType)) {
        const rightTypeSubTypes = unionTypeParts(rightType);
        if (rightTypeSubTypes.some((subType) => subType === leftType)) {
          return false;
        }
      }
      if (isNumber(rightType)) {
        const leftTypeSubTypes = unionTypeParts(leftType);
        if (leftTypeSubTypes.some((subType) => subType === rightType)) {
          return false;
        }
      }

      /**
       * Disallow mismatched comparisons, like the following:
       *
       * ```ts
       * if (fruit === 0) {}
       * ```
       */
      const intersectingTypes = getIntersectingSet(
        leftEnumTypes,
        rightEnumTypes,
      );
      return intersectingTypes.size === 0;
    }

    function isMismatchedEnumFunctionArgument(
      argumentType: ts.Type, // From the function call
      parameterType: ts.Type, // From the function itself
    ): boolean {
      /**
       * First, recursively check for functions with type containers like the following:
       *
       * ```ts
       * function useFruits(fruits: Fruit[]) {}
       * useFruits([0, 1]);
       * ```
       */
      if (isTypeReferenceType(argumentType)) {
        const argumentTypeArguments = checker.getTypeArguments(argumentType);

        const parameterSubTypes = unionTypeParts(parameterType);
        for (const parameterSubType of parameterSubTypes) {
          if (!isTypeReferenceType(parameterSubType)) {
            continue;
          }
          const parameterTypeArguments =
            checker.getTypeArguments(parameterSubType);

          for (let i = 0; i < argumentTypeArguments.length; i++) {
            const argumentTypeArgument = argumentTypeArguments[i];
            const parameterTypeArgument = parameterTypeArguments[i];
            if (
              argumentTypeArgument === undefined ||
              parameterTypeArgument === undefined
            ) {
              continue;
            }

            if (
              isMismatchedEnumFunctionArgument(
                argumentTypeArgument,
                parameterTypeArgument,
              )
            ) {
              return true;
            }
          }
        }

        return false;
      }

      /**
       * Allow function calls that have nothing to do with enums, like the following:
       *
       * ```ts
       * function useNumber(num: number) {}
       * useNumber(0);
       * ```
       */
      const argumentEnumTypes = getEnumTypes(argumentType);
      const parameterEnumTypes = getEnumTypes(parameterType);
      if (parameterEnumTypes.size === 0) {
        return false;
      }

      /**
       * Allow passing enum values into functions that take in the "any" type and similar types that
       * should basically match any enum, like the following:
       *
       * ```ts
       * function useNumber(num: number) {}
       * useNumber(Fruit.Apple);
       * ```
       */
      const parameterSubTypes = unionTypeParts(parameterType);
      for (const parameterSubType of parameterSubTypes) {
        if (
          isTypeFlagSet(parameterSubType, ALLOWED_TYPES_FOR_ANY_ENUM_ARGUMENT)
        ) {
          return false;
        }
      }

      /**
       * Disallow passing number literals or string literals into functions that take in an enum,
       * like the following:
       *
       * ```ts
       * function useFruit(fruit: Fruit) {}
       * declare const fruit: Fruit.Apple | 1;
       * useFruit(fruit)
       * ```
       */
      const argumentSubTypes = unionTypeParts(argumentType);
      for (const argumentSubType of argumentSubTypes) {
        if (
          argumentSubType.isLiteral() &&
          !isEnum(argumentSubType) &&
          // Allow passing number literals if there are number literals in the actual function type.
          !parameterSubTypes.some(
            (parameterSubType) => parameterSubType === argumentSubType,
          )
        ) {
          return true;
        }
      }

      /**
       * Allow function calls that match one of the types in a union, like the following:
       *
       * ```ts
       * function useApple(fruitOrNull: Fruit | null) {}
       * useApple(null);
       * ```
       */
      const argumentSubTypesSet = new Set(argumentSubTypes);
      const parameterSubTypesSet = new Set(parameterSubTypes);
      if (setHasAnyElementFromSet(argumentSubTypesSet, parameterSubTypesSet)) {
        return false;
      }

      /**
       * Allow function calls that have a base enum that match the function type, like the
       * following:
       *
       * ```ts
       * function useFruit(fruit: Fruit) {}
       * useFruit(Fruit.Apple);
       * ```
       */
      if (setHasAnyElementFromSet(argumentEnumTypes, parameterEnumTypes)) {
        return false;
      }

      return true;
    }

    // ------------------
    // AST node callbacks
    // ------------------

    return {
      /** When something is assigned to a variable. */
      AssignmentExpression(node): void {
        const leftType = getTypeFromNode(node.left);
        const rightType = getTypeFromNode(node.right);

        if (isAssigningNonEnumValueToEnumVariable(leftType, rightType)) {
          context.report({
            node,
            messageId: "mismatchedAssignment",
          });
        }
      },

      /** When a comparison between two things happen. */
      BinaryExpression(node): void {
        /** Allow comparisons with whitelisted operators. */
        if (ALLOWED_ENUM_OPERATORS.has(node.operator)) {
          return;
        }

        const leftType = getTypeFromNode(node.left);
        const rightType = getTypeFromNode(node.right);

        if (typesHaveLooseEnumUsage(leftType, rightType)) {
          context.report({
            node,
            messageId: "mismatchedComparison",
          });
        }
      },

      /** When a function is invoked or a class is instantiated. */
      "CallExpression, NewExpression": function callExpressionOrNewExpression(
        node: TSESTree.CallExpression | TSESTree.NewExpression,
      ): void {
        checkCallExpression(node);
      },

      /** When a unary operator is invoked. */
      UpdateExpression(node): void {
        const argumentType = getTypeFromNode(node.argument);

        /**
         * Disallow using enums with unary operators, like the following:
         *
         * ```ts
         * const fruit = Fruit.Apple;
         * fruit++;
         * ```
         */
        if (hasEnumTypes(argumentType)) {
          context.report({
            node,
            messageId: "incorrectIncrement",
          });
        }
      },

      /** When a new variable is created. */
      VariableDeclarator(node): void {
        /**
         * Allow enum declarations without an initializer, like the following:
         *
         * ```ts
         * let fruit: Fruit;
         * if (something()) {
         *   fruit = Fruit.Apple;
         * } else {
         *   fruit = Fruit.Banana;
         * }
         * ```
         */
        if (node.init === null) {
          return;
        }

        const leftTSNode = parserServices.esTreeNodeToTSNodeMap.get(node);
        const rightNode = leftTSNode.initializer;
        if (rightNode === undefined) {
          return;
        }

        /**
         * We have to use `leftTSNode.name` instead of `leftTSNode` to avoid run-time errors because
         * the `checker.getTypeAtLocation` method expects a `ts.BindingName` instead of a
         * `ts.VariableDeclaration`.
         * https://github.com/microsoft/TypeScript/issues/48878
         */
        const leftType = getTypeFromTSNode(leftTSNode.name);
        const rightType = getTypeFromTSNode(rightNode);

        if (isAssigningNonEnumValueToEnumVariable(leftType, rightType)) {
          context.report({
            node,
            messageId: "mismatchedAssignment",
            data: {
              assignmentType: getTypeName(checker, rightType),
              declaredType: getTypeName(checker, leftType),
            },
          });
        }
      },
    };
  },
});
