import { CustomStageTSConfig } from "./copied/CustomStageTSConfig";

/**
 * This is the format of the "isaacscript" section of the "tsconfig.json" file.
 *
 * We use this interface to automatically generate the schema using the "ts-json-schema-generator"
 * library.
 */
// ts-prune-ignore-next
export interface IsaacScriptTSConfig {
  customStages?: CustomStageTSConfig[];
}
