const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires

const REPO_ROOT = path.join(__dirname, "..", "..");
const ESLINT_CONFIG_ISAACSCRIPT_PATH = path.join(
  REPO_ROOT,
  "packages",
  "eslint-config-isaacscript",
);

module.exports = {
  extends: [
    path.join(ESLINT_CONFIG_ISAACSCRIPT_PATH, "base.js"),
    path.join(ESLINT_CONFIG_ISAACSCRIPT_PATH, "monorepo.js"),
  ],

  ignorePatterns: ["file-templates"],

  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
};
