import {
  isEnumBlockLabel,
  isSeparatorLine,
  isSpecialComment,
} from "./comments";
import { getAdjustedList, List, ListKind, reachedNewList } from "./list";
import { hasURL } from "./utils";

/**
 * Feed this function a string that contains one or more lines of text. It will combine all of the
 * lines and return a string with lines that do not exceed the maximum line length.
 *
 * For obvious reasons, this function works best on text that is composed of complete sentences.
 * Otherwise, it would incorrectly combine together two disparate sentences.
 *
 * This function tries to be as smart as possible in that it will not merge specific kinds of lines,
 * like bullet points, "eslint-disable" comments, and so on.
 *
 * @param text One or more lines of text, separated by newlines.
 * @param maxLength The ruler cutoff for the formatted text.
 * @param parseJSDocTags Whether or not to make formatting decisions based on the presence of JSDoc
 *                       tags. True by default. Pass false if working with leading line comments or
 *                       other non-JSDoc text.
 */
export function formatText(
  text: string,
  maxLength: number,
  parseJSDocTags = true,
): string {
  let formattedText = "";
  let formattedLine = "";
  let insideList: List | undefined;
  let insideCodeBlock = false;
  let encounteredJSDocTags = false;

  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    // Gather information about this line.
    const lineIsBlank = line.trim() === "";
    const hasCodeBlock = line.includes("```");
    const previousLineInsideCodeBlock = insideCodeBlock;
    if (hasCodeBlock) {
      insideCodeBlock = !insideCodeBlock;
    }
    const lineHasURL = hasURL(line);
    const hasExample = startsWithExample(line);
    const separatorLine = isSeparatorLine(line);
    const specialComment = isSpecialComment(line);
    const enumBlockLabel = isEnumBlockLabel(line);

    // Gather information about the previous line.
    const previousLine = lines[i - 1];
    const previousLineWasBlank =
      previousLine === undefined || previousLine.trim() === "";
    const previousLineHasCodeBlock =
      previousLine !== undefined && previousLine.includes("```");
    const previousLineHadURL =
      previousLine !== undefined && hasURL(previousLine);
    const previousLineEndedInColon =
      previousLine !== undefined && previousLine.trimEnd().endsWith(":");
    const previousLineWasSeparatorLine =
      previousLine !== undefined && isSeparatorLine(previousLine);
    const previousLineWasEnumBlockLabel =
      previousLine !== undefined && isEnumBlockLabel(previousLine);

    // Handle blank lines.
    if (lineIsBlank) {
      // Append the partial line that we were building, if any.
      [formattedLine, formattedText] = appendLineToText(
        formattedLine,
        formattedText,
      );

      // Append the blank line, but ignore multiple blank lines in a row (unless we are inside of a
      // code block).
      const lastCharacter = formattedText.at(-1);
      if (
        (lastCharacter !== undefined && lastCharacter !== "\n") ||
        insideCodeBlock
      ) {
        formattedText += "\n";
      }

      insideList = undefined;
      continue;
    }

    // Handle code blocks. This case is simple because we need to exactly preserve the text.
    if (hasCodeBlock || previousLineHasCodeBlock || insideCodeBlock) {
      // Append the partial line that we were building, if any.
      [formattedLine, formattedText] = appendLineToText(
        formattedLine,
        formattedText,
      );

      // Enforce newlines before the beginning of code blocks.
      if (
        hasCodeBlock &&
        !previousLineInsideCodeBlock &&
        !previousLineWasBlank
      ) {
        formattedText += "\n";
      }

      // Copy the line exactly.
      formattedLine += line;

      // Enforce newlines after the end of code blocks.
      const nextLine = lines[i + 1];
      const nextLineIsBlank = nextLine === undefined || nextLine.trim() === "";
      if (hasCodeBlock && previousLineInsideCodeBlock && !nextLineIsBlank) {
        // Append the partial line that we were building, if any.
        [formattedLine, formattedText] = appendLineToText(
          formattedLine,
          formattedText,
        );

        formattedText += "\n";
      }

      insideList = undefined;
      continue;
    }

    // Handle special comments.
    if (specialComment) {
      // Append the partial line that we were building, if any.
      [formattedLine, formattedText] = appendLineToText(
        formattedLine,
        formattedText,
      );

      // Copy the line exactly.
      formattedLine += line;

      [formattedLine, formattedText] = appendLineToText(
        formattedLine,
        formattedText,
      );

      continue;
    }

    // Handle lists. (JSDoc tags also count as lists.)
    const list = getAdjustedList(
      line,
      previousLineWasBlank,
      previousLineEndedInColon,
      insideList,
    );
    if (reachedNewList(insideList, list)) {
      // Keep track that we have begun a list (or a new sub-list).
      insideList = list;
    }

    // Lists and some other specific text elements indicate that we should always insert a new line,
    // even if the text has no wrapped to the end of the ruler yet.
    if (
      list !== undefined ||
      lineHasURL ||
      previousLineHadURL ||
      hasExample ||
      separatorLine ||
      previousLineWasSeparatorLine ||
      enumBlockLabel ||
      previousLineWasEnumBlockLabel
    ) {
      // Append the partial line that we were building, if any.
      [formattedLine, formattedText] = appendLineToText(
        formattedLine,
        formattedText,
      );
    }

    // Keep track of when we first encounter JSDoc tags. (JSDoc comments can be thought of as having
    // an "description" or "introductory" section at the top, and then a list of JSDoc tags at the
    // bottom.)
    if (
      parseJSDocTags &&
      !encounteredJSDocTags &&
      list !== undefined &&
      list.kind === ListKind.JSDocTag
    ) {
      encounteredJSDocTags = true;

      // Enforce a newline between a JSDoc description (i.e. introductory text) and the first JSDoc
      // tag.
      if (
        !stringContainsOnlyWhitespace(formattedText) &&
        !previousLineWasBlank
      ) {
        // Append the partial line that we were building, if any.
        [formattedLine, formattedText] = appendLineToText(
          formattedLine,
          formattedText,
        );

        formattedText += "\n";
      }
    }

    const words = line.split(" ");
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let j = 0; j < words.length; j++) {
      const word = words[j]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

      // Words can be blank strings in certain cases. For example: "dog cat"
      if (word === "") {
        continue;
      }

      // Handle splitting to a new line.
      const splitToNewLine = shouldSplitToNewLine(
        formattedLine,
        word,
        maxLength,
      );
      if (splitToNewLine) {
        // Append the partial line that we were building, if any.
        [formattedLine, formattedText] = appendLineToText(
          formattedLine,
          formattedText,
        );

        // Overflowed lists should be indented so that the list items can be more easily
        // distinguished.
        if (insideList !== undefined) {
          // It is possible for JSDoc comments to have really long variable names, which would make
          // the indent be really big. Thus, we arbitrarily hard-cap the effective marker size at a
          // third of the width of the remaining space.
          const amountOfSpacesToWorkWith =
            maxLength - insideList.numLeadingSpaces;
          const thirdOfRemainingSpace = Math.floor(
            amountOfSpacesToWorkWith / 3,
          );
          const effectiveMarkerSize = Math.min(
            insideList.markerSize,
            thirdOfRemainingSpace,
          );

          // We subtract one since we will add an extra space below when adding the first word.
          const numSpacesToAdd =
            insideList.numLeadingSpaces + effectiveMarkerSize - 1;
          formattedLine += " ".repeat(numSpacesToAdd);
        }
      }

      // Add the word. (`numLeadingSpaces` will be set if this is a line with a sub-bullet point.)
      const atBeginningOfLine = formattedLine === "";
      const numLeadingSpaces = list === undefined ? 0 : list.numLeadingSpaces;
      const leadingSpaces = " ".repeat(numLeadingSpaces);
      const textToAdd = atBeginningOfLine
        ? `${leadingSpaces}${word}`
        : ` ${word}`;
      formattedLine += textToAdd;
    }
  }

  // Append the partial line that we were building, if any.
  [formattedLine, formattedText] = appendLineToText(
    formattedLine,
    formattedText,
  );

  return formattedText;
}

/**
 * We split to a new line if:
 * 1. adding the word would make it overflow past the maximum length
 * 2. and there is at least one word on the current line
 *
 * For example, there could be a very long URL that exceeds the maximum length, but since there are
 * no spaces in the URL, it can't be split up and has to exceed the maximum length.
 */
function shouldSplitToNewLine(
  formattedLine: string,
  word: string,
  effectiveLength: number,
) {
  const atBeginningOfLine = formattedLine === "";
  const textToAdd = atBeginningOfLine ? word : ` ${word}`;
  const lineLengthIfAdded = formattedLine.length + textToAdd.length;
  return lineLengthIfAdded > effectiveLength && !atBeginningOfLine;
}

function appendLineToText(
  formattedLine: string,
  formattedText: string,
): [formattedLine: string, formattedText: string] {
  if (formattedLine !== "") {
    if (formattedText !== "") {
      formattedText += "\n";
    }
    formattedText += formattedLine;
    formattedLine = "";
  }

  return [formattedLine, formattedText];
}

function startsWithExample(text: string): boolean {
  const trimmedText = text.trimStart();

  return (
    trimmedText.startsWith("e.g. ") ||
    trimmedText.startsWith("(e.g. ") ||
    trimmedText.startsWith("i.e. ") ||
    trimmedText.startsWith("(i.e. ")
  );
}

function stringContainsOnlyWhitespace(string: string) {
  return string.trim() === "";
}
