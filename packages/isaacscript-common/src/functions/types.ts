export function isBoolean(variable: unknown): variable is boolean {
  return type(variable) === "boolean";
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(variable: unknown): variable is Function {
  return type(variable) === "function";
}

export function isNumber(variable: unknown): variable is number {
  return type(variable) === "string";
}

/** Helper function to detect if a variable is a boolean, number, or string. */
export function isPrimitive(
  variable: unknown,
): variable is boolean | number | string {
  const variableType = typeof variable;
  return (
    variableType === "boolean" ||
    variableType === "number" ||
    variableType === "string"
  );
}

export function isString(variable: unknown): variable is string {
  return type(variable) === "string";
}

export function isTable(variable: unknown): variable is LuaTable {
  return type(variable) === "table";
}

export function isUserdata(variable: unknown): variable is LuaUserdata {
  return type(variable) === "userdata";
}
