import { DefaultMap } from "../classes/DefaultMap";
import {
  isSerializationBrand,
  SerializationBrand,
} from "../enums/private/SerializationBrand";
import { SerializationType } from "../enums/SerializationType";
import { SAVE_DATA_MANAGER_DEBUG } from "../features/saveDataManager/constants";
import { TSTLClass } from "../types/private/TSTLClass";
import { log } from "./log";
import {
  copyIsaacAPIClass,
  deserializeIsaacAPIClass,
  isSerializableIsaacAPIClass,
  isSerializedIsaacAPIClass,
} from "./serialization";
import { isTSTLClass, newTSTLClass } from "./tstlClass";
import { getTraversalDescription } from "./utils";

/**
 * deepCopy is a semi-generic deep cloner. It will recursively copy all of the values so that none
 * of the nested references remain.
 *
 * It supports the following object types:
 *
 * - `LuaTable` / basic TSTL objects
 * - TSTL `Map`
 * - TSTL `Set`
 * - TSTL classes
 * - `DefaultMap`
 * - Isaac `Color` objects
 * - Isaac `KColor` objects
 * - Isaac `RNG` objects
 * - Isaac `Vector` objects
 *
 * @param oldObject The object to copy.
 * @param serializationType Has 3 possible values. Can leave TypeScriptToLua objects as-is, or can
 * serialize objects to Lua tables, or can deserialize Lua tables to objects. Default is
 * `SerializationType.NONE`.
 * @param traversalDescription Used to track the current key that we are operating on.
 */
export function deepCopy(
  oldObject: LuaTable | Map<AnyNotNil, unknown> | Set<AnyNotNil>,
  serializationType = SerializationType.NONE,
  traversalDescription = "",
): LuaTable | Map<AnyNotNil, unknown> | Set<AnyNotNil> {
  if (SAVE_DATA_MANAGER_DEBUG) {
    let logString = `deepCopy is operating on: ${traversalDescription}`;
    if (serializationType === SerializationType.SERIALIZE) {
      logString += " (serializing)";
    } else if (serializationType === SerializationType.DESERIALIZE) {
      logString += " (deserializing)";
    }
    log(logString);
  }

  const oldObjectType = type(oldObject);
  if (oldObjectType !== "table") {
    error(
      `The deepCopy function was given a ${oldObjectType} instead of a table.`,
    );
  }

  const oldTable = oldObject as unknown as LuaTable<AnyNotNil, unknown>;
  const isClass = isTSTLClass(oldTable);

  let hasTSTLDefaultMapBrand = false;
  let hasTSTLMapBrand = false;
  let hasTSTLSetBrand = false;
  if (!(oldObject instanceof Map) && !(oldObject instanceof Set) && !isClass) {
    checkMetatable(oldTable, traversalDescription);

    hasTSTLDefaultMapBrand = oldTable.has(SerializationBrand.DEFAULT_MAP);
    hasTSTLMapBrand = oldTable.has(SerializationBrand.MAP);
    hasTSTLSetBrand = oldTable.has(SerializationBrand.SET);
  }

  // Instantiate the new object
  let newObject:
    | LuaTable<AnyNotNil, unknown>
    | Map<AnyNotNil, unknown>
    | Set<AnyNotNil>;
  if (
    serializationType === SerializationType.NONE &&
    oldObject instanceof DefaultMap
  ) {
    const oldDefaultMap = oldObject as DefaultMap<AnyNotNil, unknown>;
    const constructorArg = oldDefaultMap.getConstructorArg();
    newObject = new DefaultMap(constructorArg);
  } else if (
    serializationType === SerializationType.DESERIALIZE &&
    hasTSTLDefaultMapBrand
  ) {
    const defaultValue: unknown = oldTable.get(
      SerializationBrand.DEFAULT_MAP_VALUE,
    );
    if (
      typeof defaultValue !== "boolean" &&
      typeof defaultValue !== "number" &&
      typeof defaultValue !== "string"
    ) {
      error(
        "The deepCopy function failed to get a valid default value for a DefaultMap object when deserializing.",
      );
    } else {
      newObject = new DefaultMap(defaultValue);
    }
  } else if (
    (serializationType === SerializationType.NONE &&
      oldObject instanceof Map) ||
    (serializationType === SerializationType.DESERIALIZE && hasTSTLMapBrand)
  ) {
    newObject = new Map();
  } else if (
    (serializationType === SerializationType.NONE &&
      oldObject instanceof Set) ||
    (serializationType === SerializationType.DESERIALIZE && hasTSTLSetBrand)
  ) {
    newObject = new Set();
  } else if (serializationType === SerializationType.NONE && isClass) {
    // We need to first invoke the constructor to initialize the class properly
    // Then, we recursively copy the fields below as we would with a normal Lua table
    const oldTSTLClass = oldObject as unknown as TSTLClass;
    newObject = newTSTLClass(oldTSTLClass) as unknown as LuaTable<
      AnyNotNil,
      unknown
    >;
  } else {
    newObject = new LuaTable();
  }

  // If we are serializing, brand TSTL objects
  if (serializationType === SerializationType.SERIALIZE) {
    const newTable = newObject as LuaTable<AnyNotNil, unknown>;

    if (oldObject instanceof DefaultMap) {
      newTable.set(SerializationBrand.DEFAULT_MAP, "");

      const oldDefaultMap = oldObject as DefaultMap<AnyNotNil, unknown>;
      const defaultValue = oldDefaultMap.getConstructorArg();

      // The constructor argument can be a reference to a factory function
      // If this is the case, then we cannot serialize it
      // Do not throw a runtime error, since the merge function does not need to instantiate the
      // DefaultMap class in most circumstances
      if (
        typeof defaultValue === "boolean" ||
        typeof defaultValue === "number" ||
        typeof defaultValue === "string"
      ) {
        newTable.set(SerializationBrand.DEFAULT_MAP_VALUE, defaultValue);
      }
    } else if (oldObject instanceof Map) {
      newTable.set(SerializationBrand.MAP, "");
    } else if (oldObject instanceof Set) {
      newTable.set(SerializationBrand.SET, "");
    }
  }

  // Depending on whether we are working on a Lua table or a TypeScriptToLua object,
  // we need to iterate over the object in a specific way
  if (oldObject instanceof Map) {
    for (const [key, value] of oldObject.entries()) {
      if (isSerializationBrand(key)) {
        continue;
      }

      deepCopyValue(
        oldObject,
        newObject,
        key,
        value,
        traversalDescription,
        serializationType,
      );
    }
  } else if (oldObject instanceof Set) {
    for (const key of oldObject.values()) {
      if (isSerializationBrand(key)) {
        continue;
      }

      // For serialization purposes, represent a Set as a table with keys that match the values in
      // the set and values that are an empty string
      const value = "";
      deepCopyValue(
        oldObject,
        newObject,
        key,
        value,
        traversalDescription,
        serializationType,
      );
    }
  } else {
    // This applies to both Lua tables and TypeScriptToLua classes
    for (const [key, value] of pairs(oldObject)) {
      if (isSerializationBrand(key)) {
        continue;
      }

      deepCopyValue(
        oldObject,
        newObject,
        key,
        value,
        traversalDescription,
        serializationType,
      );
    }
  }

  return newObject;
}

function checkMetatable(table: LuaTable, traversalDescription: string) {
  // Lua tables can have metatables, which make writing a generic deep-cloner impossible
  // We will refuse to copy an unknown table type that has a metatable
  const metatable = getmetatable(table);
  if (metatable === undefined) {
    return;
  }

  const tableDescription =
    traversalDescription === ""
      ? "the table to copy"
      : `"${traversalDescription}"`;

  error(
    `The deepCopy function detected that "${tableDescription}" has a metatable. Copying tables with metatables is not supported, unless they are explicitly handled by the save data manager. (e.g. Vectors, TypeScriptToLua Maps, etc.)`,
  );
}

function deepCopyValue(
  oldObject: LuaTable | Map<AnyNotNil, unknown> | Set<AnyNotNil>,
  newObject: LuaTable | Map<AnyNotNil, unknown> | Set<AnyNotNil>,
  key: AnyNotNil,
  value: unknown,
  traversalDescription: string,
  serializationType: SerializationType,
) {
  const valueType = type(value);
  validateValue(value, valueType, traversalDescription);

  // First, handle the special case of serializing a value for a TSTL object that uses integer keys
  // These will be converted to JSON as an array, which will insert a bunch of unnecessary "null"
  // entires (e.g. "[null, null, null, 123]" for a TSTL Map with one entry at index 4)
  // To work around this, we simply convert all integer keys to strings
  // We mark the table with a special identifier key so that we can properly deserialize it later
  // This key will be set over and over for every element in the Map, but we have to do it here
  // since we are not able to derive the type of Map keys at runtime
  let convertNumberKeysToString = false;
  const isTSTLObject = oldObject instanceof Map || oldObject instanceof Set;
  const keyType = type(key);
  if (
    serializationType === SerializationType.SERIALIZE &&
    isTSTLObject &&
    keyType === "number"
  ) {
    convertNumberKeysToString = true;

    const newTable = newObject as LuaTable<AnyNotNil, unknown>;
    newTable.set(SerializationBrand.OBJECT_WITH_NUMBER_KEYS, "");

    if (SAVE_DATA_MANAGER_DEBUG) {
      log("deepCopy is converting a TSTL map with number keys to strings.");
    }
  }

  const newValue = getNewValue(
    key,
    value,
    traversalDescription,
    serializationType,
  );

  // Set the value on the new object
  // Even though the "set" invocations below are identical,
  // we must narrow the type for the method to be transpiled correctly
  if (newObject instanceof Map) {
    newObject.set(key, newValue);
  } else if (newObject instanceof Set) {
    newObject.add(key);
  } else {
    const keyToUse = convertNumberKeysToString ? tostring(key) : key;
    newObject.set(keyToUse, newValue);
  }
}

function validateValue(
  value: unknown,
  valueType: string,
  traversalDescription: string,
) {
  // Isaac API classes are type "userdata"
  // Whitelist the ones that we can copy
  if (isSerializableIsaacAPIClass(value)) {
    return;
  }

  if (
    valueType === "function" ||
    valueType === "nil" ||
    valueType === "thread" ||
    valueType === "userdata"
  ) {
    error(
      `The deepCopy function detected that "${traversalDescription}" has a value of type "${valueType}", which is not supported.`,
    );
  }
}

/** Returns the value to set on the new object. */
function getNewValue(
  key: AnyNotNil,
  value: unknown,
  traversalDescription: string,
  serializationType: SerializationType,
): unknown {
  if (isSerializableIsaacAPIClass(value)) {
    return copyIsaacAPIClass(value, serializationType);
  }

  if (
    isSerializedIsaacAPIClass(value) &&
    serializationType === SerializationType.DESERIALIZE
  ) {
    return deserializeIsaacAPIClass(value);
  }

  if (type(value) === "table") {
    const table = value as LuaTable<AnyNotNil, unknown>;
    traversalDescription = getTraversalDescription(key, traversalDescription);
    return deepCopy(table, serializationType, traversalDescription);
  }

  return value;
}
