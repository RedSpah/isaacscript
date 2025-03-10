import Ajv, { Schema } from "ajv";
import chalk from "chalk";
import {
  ISAACSCRIPT_SCHEMA_PATH,
  PROJECT_NAME,
  TSCONFIG_JSON,
  TSCONFIG_JSON_PATH,
} from "./constants";
import * as file from "./file";
import { CustomStageTSConfig } from "./interfaces/copied/CustomStageTSConfig";
import { getJSONC } from "./json";
import { error, isRecord } from "./utils";

const ADVICE = `Try copying the "${TSCONFIG_JSON}" from a brand new ${PROJECT_NAME} project.`;
const ISAACSCRIPT_SCHEMA_RAW = file.read(ISAACSCRIPT_SCHEMA_PATH, false);
const ISAACSCRIPT_SCHEMA = JSON.parse(ISAACSCRIPT_SCHEMA_RAW) as Schema;
const ajv = new Ajv();
const schemaValidate = ajv.compile(ISAACSCRIPT_SCHEMA);

function getTSConfigJSON(verbose: boolean): Record<string, unknown> {
  return getJSONC(TSCONFIG_JSON_PATH, verbose);
}

function getIsaacScriptSection(
  verbose: boolean,
): Record<string, unknown> | undefined {
  const tsConfig = getTSConfigJSON(verbose);

  // We allow different kinds of casing for the field name.
  for (const fieldName of ["isaacscript", "isaacScript", "IsaacScript"]) {
    const field = tsConfig[fieldName];
    if (field !== undefined) {
      if (!isRecord(field)) {
        error(
          `Your "${chalk.green(
            TSCONFIG_JSON_PATH,
          )}" file has a non-object value for the "${fieldName}" field, which is surely a mistake. ${ADVICE}`,
        );
      }

      return field;
    }
  }

  return undefined;
}

export function getFirstTSConfigIncludePath(verbose: boolean): string {
  const tsConfig = getTSConfigJSON(verbose);

  const { include } = tsConfig;
  if (include === undefined) {
    error(
      `Your "${chalk.green(
        TSCONFIG_JSON_PATH,
      )}" file does not have an "include" field, which is surely a mistake. ${ADVICE}`,
    );
  }

  if (!Array.isArray(include)) {
    error(
      `Your "${chalk.green(
        TSCONFIG_JSON_PATH,
      )}" file has an "include" field that is not an array, which is surely a mistake. ${ADVICE}`,
    );
  }

  const firstInclude = include[0] as unknown | undefined;
  if (firstInclude === undefined) {
    error(
      `Your "${chalk.green(
        TSCONFIG_JSON_PATH,
      )}" file has an empty "include" field, which is surely a mistake. ${ADVICE}`,
    );
  }

  if (typeof firstInclude !== "string") {
    error(
      `Your "${chalk.green(
        TSCONFIG_JSON_PATH,
      )}" file has a non-string "include" value, which is surely a mistake. ${ADVICE}`,
    );
  }

  return firstInclude;
}

/**
 * Parses the "tsconfig.json" file and returns the "customStages" section. If the section does not
 * exist, returns an empty array.
 *
 * Most of this function is simply performing input validation.
 */
export function getCustomStagesFromTSConfig(
  verbose: boolean,
): CustomStageTSConfig[] {
  const isaacScriptSection = getIsaacScriptSection(verbose);
  if (isaacScriptSection === undefined) {
    return [];
  }

  const valid = schemaValidate(isaacScriptSection);
  if (!valid) {
    console.error(
      'Your "isaacscript" section in the "tsconfig.json" file has the following errors:',
    );
    console.error(schemaValidate.errors);
    error(
      "For more information, see the custom stages documentation on the website.",
    );
  }

  // "customStages" is an optional field.
  const { customStages } = isaacScriptSection;
  if (customStages === undefined) {
    return [];
  }

  // The type of "customStages" should be validated by Ajv, but check again just in case.
  if (!Array.isArray(customStages)) {
    error(
      `Failed to parse the "customStages" field, since it was not an array. ${ADVICE}.`,
    );
  }

  // Perform some extra validation that can't be automatically done by Ajv.
  for (const customStageTSConfig of customStages as CustomStageTSConfig[]) {
    const { name } = customStageTSConfig;
    if (name === "") {
      error(
        chalk.red(
          "One of the custom stages has a blank name, which is not allowed.",
        ),
      );
    }

    const { xmlPath } = customStageTSConfig;
    if (xmlPath === "") {
      error(
        chalk.red(
          `The "${name}" custom stage has a blank "xmlPath" field, which is not allowed.`,
        ),
      );
    }

    const { roomVariantPrefix } = customStageTSConfig;
    if (roomVariantPrefix < 101 || roomVariantPrefix > 999) {
      error(
        chalk.red(
          `The "${name}" custom stage has an invalid value for the "roomVariantPrefix" field: ${roomVariantPrefix}`,
        ),
      );
    }

    const { baseStage } = customStageTSConfig;
    if (baseStage !== undefined && (baseStage < 2 || baseStage > 13)) {
      error(
        `The "${name}" custom stage has an invalid value for the "baseStage" field: ${baseStage}`,
      );
    }

    const { baseStageType } = customStageTSConfig;
    if (
      baseStageType !== undefined &&
      (baseStageType < 0 || baseStageType > 5)
    ) {
      error(
        `The "${name}" custom stage has an invalid value for the "baseStageType" field: ${baseStageType}`,
      );
    }
  }

  return customStages as CustomStageTSConfig[];
}
