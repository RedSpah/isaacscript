// This is a shared configuration file for ESLint
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    // The linter base is the Airbnb style guide,
    // which is the most popular JavaScript style guide in the world:
    // https://github.com/airbnb/javascript
    // The actual ESLint config is located here:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules
    // The TypeScript config extends it:
    // https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js
    // This includes the "parser" declaration of "@typescript-eslint/parser"
    "airbnb-typescript/base",

    // We extend the Airbnb rules with the "recommended" and "recommended-requiring-type-checking"
    // rules from the "typescript-eslint" plugin, which is also recommended by Matt Turnbull,
    // the author of "airbnb-typescript/base"
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/README.md#recommended
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    // We use Prettier to automatically format TypeScript files
    // We want to run Prettier as an ESLint rule so that we can detect non-formatted files in CI
    // https://github.com/prettier/eslint-plugin-prettier
    // https://silvenon.com/blog/integrating-and-enforcing-prettier-and-eslint
    "plugin:prettier/recommended",

    // Disable any ESLint rules that conflict with Prettier
    // (otherwise, we will have unfixable ESLint errors)
    // https://github.com/prettier/eslint-config-prettier
    "prettier",
  ],

  // We modify the linting rules from the base for some specific things
  // (listed in alphabetical order)
  rules: {
    // Documentation:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    // Not defined in parent configs
    // Prefer the "[]string" syntax over "Array<string>"
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],

    // Documentation:
    // https://eslint.org/docs/rules/lines-between-class-members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
    // Airbnb has "exceptAfterSingleLine" turned off by default
    // A list of single-line variable declarations at the top of a class is common in TypeScript
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],

    // Documentation:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    // https://eslint.org/docs/rules/no-unused-vars
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js
    // TypeScript itself does not allow unused variables when used with the "noUnusedLocals"
    // compiler flag, which is what this project uses, so this is a duplicate warning
    "@typescript-eslint/no-unused-vars": "off",

    // Documentation:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    // https://eslint.org/docs/rules/no-use-before-define
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js
    // This allows code to be structured in a more logical order
    "@typescript-eslint/no-use-before-define": "off",

    // Documentation:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    // Defined at:
    // https://github.com/prettier/eslint-config-prettier/blob/main/%40typescript-eslint.js
    // In order to forbid unnecessary backticks, we must re-enable the "@typescript-eslint/quotes"
    // rule as specified in the eslint-config-prettier documentation:
    // https://github.com/prettier/eslint-config-prettier#enforce-backticks
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    // Documentation:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    // Defined at:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
    // This rule disallows booleans in template expressions, which transpile just fine to Lua
    "@typescript-eslint/restrict-template-expressions": "off",

    // Documentation:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    // Defined at:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
    // ark120202, the author of TypeScriptToLua, recommends using triple-slash directives
    "@typescript-eslint/triple-slash-reference": "off",

    // Documentation:
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
    // Unlike JavaScript, Lua modules are tables and do not have a default export
    "import/prefer-default-export": "off",

    // Documentation:
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-bitwise.md
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
    // Isaac enums use bitwise operators (e.g. "EntityFlag")
    "no-bitwise": "off",

    // Documentation:
    // https://eslint.org/docs/rules/no-console
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
    // As a command-line program, it is normal to write to standard out and standard error
    "no-console": "off",

    // Documentation:
    // https://eslint.org/docs/rules/no-continue
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
    // Proper use of continues can reduce indentation for long blocks of code
    "no-continue": "off",

    // Documentation:
    // https://eslint.org/docs/rules/no-param-reassign
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
    // The Isaac API callback functions expect you to modify the provided object
    "no-param-reassign": "off",

    // Documentation:
    // https://eslint.org/docs/rules/no-plusplus
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
    // Airbnb disallows these because it can lead to errors with minified code;
    // we don't have to worry about this in for loops though
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],

    // Documentation:
    // https://eslint.org/docs/rules/no-restricted-globals
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js
    // print is used with Lua mods
    "no-restricted-globals": "off",

    // Documentation:
    // https://eslint.org/docs/rules/no-restricted-syntax
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
    // "for..of" loops are necessary to write efficient code in some situations
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // Documentation:
    // https://eslint.org/docs/rules/no-underscore-dangle
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
    // We keep the Airbnb specification but allow calling functions that overload Lua operators:
    // https://moddingofisaac.com/docs/class_vector.html
    "no-underscore-dangle": [
      "error",
      {
        allow: ["__add", "__sub", "__mul", "__div", "__unm", "__len"],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    // Documentation:
    // https://eslint.org/docs/rules/prefer-destructuring
    // Defined at:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
    // Array destructuring can result in non-intuitive code
    // Object destructuring is disgustingly verbose in TypeScript
    // e.g. "const foo: string = bar.foo;" vs "const { foo }: { foo: string } = bar;"
    "prefer-destructuring": "off",
  },
};
