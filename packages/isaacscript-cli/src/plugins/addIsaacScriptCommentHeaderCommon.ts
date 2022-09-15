/** This plugin adds an explanatory header to the top of the generated Lua code. */

import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";
import * as tstl from "typescript-to-lua";

const cwd = process.cwd();
const packageJSONPath = path.join(cwd, "package.json");
const packageJSONContents = fs.readFileSync(packageJSONPath, "utf8");
const packageJSON = JSON.parse(packageJSONContents) as Record<string, unknown>;

const INFORMATIONAL_HEADER = `--[[

isaacscript-common ${packageJSON["version"]}

This is the "isaacscript-common" library, which was created with the IsaacScript tool.

This library contains helper functions and features that abstract away much of the complexity in
working with the Isaac API. For more information on how to use this library, see the manual:
https://isaacscript.github.io/main/isaacscript-in-lua

DO NOT EDIT THIS FILE DIRECTLY!

The Lua code in this file is not actually the source code for the program. Rather, it was
automatically generated from higher-level TypeScript code, and might be hard to read. If you want to
understand how the code in this library works, you should read the actual TypeScript source code
directly, which is located at:
https://github.com/IsaacScript/isaacscript/tree/main/packages/isaacscript-common

Please open bug reports and pull requests on GitHub. You can also ask questions in the Discord
server: https://discord.gg/KapmKQ2gUD

Note that if you are writing your mod in TypeScript, using this file is unnecessary, as every
"isaacscript-common" feature will be automatically bundled with your mod as needed. For more
information about using TypeScript, see the website: https://isaacscript.github.io/main/features

--]]

`;

const LUA_LANGUAGE_SERVER_DISABLES = `
---@diagnostic disable: deprecated
---@diagnostic disable: lowercase-global
`
  .trim()
  .concat("\n\n");

const plugin: tstl.Plugin = {
  beforeEmit(
    _program: ts.Program,
    _options: tstl.CompilerOptions,
    _emitHost: tstl.EmitHost,
    result: tstl.EmitFile[],
  ) {
    for (const file of result) {
      file.code =
        INFORMATIONAL_HEADER + LUA_LANGUAGE_SERVER_DISABLES + file.code;
    }
  },
};

// ts-prune-ignore-next
export default plugin;
