// See the comment in "fixIsaacScriptCommon.ts".

import { readdirSync } from "fs";
import { file } from "isaacscript-cli";
import path from "path";

const PACKAGE_NAME = "isaac-typescript-definitions";
const DOCS_DIR = path.join(__dirname, "..", "docs");
const PACKAGE_DOCS_DIR = path.join(DOCS_DIR, PACKAGE_NAME);
const MODULES_DIR = path.join(PACKAGE_DOCS_DIR, "modules");
const MODULES_MD_PATH = path.join(PACKAGE_DOCS_DIR, "modules.md");
const CATEGORY_FILE_NAME = "_category_.yml";
const ENUMS_DIR = path.join(PACKAGE_DOCS_DIR, "enums");

/** We hard-code the title for some specific files. */
const FILE_NAME_TO_TITLE: ReadonlyMap<string, string> = new Map([
  ["functions", "Global Functions"],
  ["main", "main.lua"],
  ["json", "json.lua"],
  ["socket", "socket.lua"],
  ["primitives", "Primitives"],
]);

const SIDEBAR_POSITIONS: ReadonlyMap<string, number> = new Map([
  // "Introduction" is hard coded as 0 in "website-root.md".
  ["Classes", 1],
  ["Enums", 2],
  ["Global Functions", 3],
  ["main.lua", 4],
  ["json.lua", 5],
  ["socket.lua", 6],
  ["Unofficial", 7],
  ["Mods", 8],
]);

main();

function main() {
  // Since we are only generating enums, there will be nothing in the module directory that we need,
  // so we can just delete it.
  file.deleteFileOrDirectory(MODULES_DIR, false);
  file.deleteFileOrDirectory(MODULES_MD_PATH, false);

  addCategoryFilesAndMarkdownHeaders();
  renameEnumFiles();
}

function addCategoryFilesAndMarkdownHeaders() {
  // Do every subdirectory. (As of August 2022, it should only be the "enums" directory.)
  const directories = getDirectoryNames(PACKAGE_DOCS_DIR);
  for (const directoryName of directories) {
    const directoryPath = path.join(PACKAGE_DOCS_DIR, directoryName);
    addCategoryFile(directoryPath);

    const markdownFileNames = getMarkdownFileNames(directoryPath);
    for (const markdownFileName of markdownFileNames) {
      const markdownFilePath = path.join(directoryPath, markdownFileName);
      addMarkdownHeader(markdownFilePath);
    }
  }
}

function addCategoryFile(directoryPath: string) {
  const directoryName = path.basename(directoryPath);
  const categoryFilePath = path.join(directoryPath, CATEGORY_FILE_NAME);

  const capitalizedDirectoryName = capitalizeFirstLetter(directoryName);
  const label = capitalizedDirectoryName;
  let fileContents = `label: ${label}\n`;
  const position = SIDEBAR_POSITIONS.get(label);
  if (position !== undefined) {
    fileContents += `position: ${position}\n`;
  }
  file.write(categoryFilePath, fileContents, false);
}

function addMarkdownHeader(filePath: string) {
  const title = getTitle(filePath);
  const header = `
---
custom_edit_url: null
---

# ${title}
  `
    .trim()
    .concat("\n\n");

  let fileContents = file.read(filePath, false);

  // Remove the title generated by `typedoc-plugin-markdown`, which will be on the first line.
  const lines = fileContents.trim().split("\n");
  lines.shift();
  lines.shift(); // This is a blank line.

  // Remove the first line, which is a breadcrumbs link that is not needed in this context.
  // e.g. "[classes/DefaultMap](../modules/classes_DefaultMap.md).DefaultMap"
  lines.shift();
  lines.shift(); // This is a blank line.

  fileContents = lines.join("\n");

  const newFileContents = header + fileContents;
  file.write(filePath, newFileContents, false);
}

function getTitle(filePath: string) {
  const fileName = path.basename(filePath);

  // First, handle the special case of a hard-coded title.
  const pageName = trimSuffix(fileName, ".md");
  const customTitle = FILE_NAME_TO_TITLE.get(pageName);
  if (customTitle !== undefined) {
    return customTitle;
  }

  const properNameMatch = fileName.match(/(\w+)\.md/);
  if (properNameMatch === null) {
    error(`Failed to parse the proper name from the file name: ${fileName}`);
  }

  const properName = properNameMatch[1];
  if (properName === undefined) {
    error(`Failed to parse the proper name from the match: ${fileName}`);
  }

  return properName;
}

/**
 * The enum files will be a mix of files like "ActiveSlot.ActiveSlot.md" and files like
 * "collections_entityState.BigHornState.md". We want all of the enums to appear in the left-hand
 * sidebar in alphabetical order, so we want to rename everything to just be named after the enum.
 */
function renameEnumFiles() {
  const markdownFileNames = getMarkdownFileNames(ENUMS_DIR);
  for (const markdownFileName of markdownFileNames) {
    const markdownFilePath = path.join(ENUMS_DIR, markdownFileName);
    const match = markdownFileName.match(/\.(\w+\.md)/);
    if (match === null) {
      error(`Failed to parse the Markdown file name of: ${markdownFileName}`);
    }

    const simplifiedFileName = match[1];
    if (simplifiedFileName === undefined) {
      error(
        `Failed to parse the simplified file name from the Markdown file name of: ${markdownFileName}`,
      );
    }

    const dstPath = path.join(ENUMS_DIR, simplifiedFileName);
    file.rename(markdownFilePath, dstPath, false);
  }
}

// ----------------
// Helper functions
// ----------------

function getDirectoryNames(directoryPath: string) {
  return readdirSync(directoryPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function getMarkdownFileNames(directoryPath: string) {
  return readdirSync(directoryPath, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md"))
    .map((dirent) => dirent.name);
}

function capitalizeFirstLetter(string: string): string {
  const firstCharacter = string.charAt(0);
  const capitalizedFirstLetter = firstCharacter.toUpperCase();
  const restOfString = string.slice(1);

  return `${capitalizedFirstLetter}${restOfString}`;
}

/** Helper function to trim a suffix from a string, if it exists. Returns the trimmed string. */
function trimSuffix(string: string, prefix: string): string {
  if (!string.endsWith(prefix)) {
    return string;
  }

  const endCharacter = string.length - prefix.length;
  return string.slice(0, endCharacter);
}

function error(...args: unknown[]): never {
  console.error(...args);
  return process.exit(1);
}
