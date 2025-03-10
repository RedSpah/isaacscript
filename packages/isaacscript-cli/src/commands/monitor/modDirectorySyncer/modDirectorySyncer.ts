import syncDirectory from "sync-directory";
import { FILE_SYNCED_MESSAGE } from "../../../constants";

const SUBPROCESS_NAME = "directory syncer";

let modSourcePath: string;
let modTargetPath: string;

init();

function init() {
  const args = process.argv.slice(2);

  const firstArg = args[0];
  if (firstArg === undefined) {
    throw new Error(
      `The ${SUBPROCESS_NAME} process did not get a valid first argument.`,
    );
  }

  const secondArg = args[1];
  if (secondArg === undefined) {
    throw new Error(
      `The ${SUBPROCESS_NAME} process did not get the right amount of arguments.`,
    );
  }

  modSourcePath = firstArg;
  modTargetPath = secondArg;

  syncDirectory(modSourcePath, modTargetPath, {
    watch: true,
    type: "copy",
    afterEachSync,
    onError,
    chokidarWatchOptions: {
      awaitWriteFinish: {
        stabilityThreshold: 1000,
      },
    },
  });
}

function afterEachSync(params?: {
  eventType: string;
  nodeType: string;
  relativePath: string;
  srcPath: string;
  targetPath: string;
}) {
  if (params === undefined) {
    return;
  }

  if (params.eventType !== "init:copy") {
    send(`${FILE_SYNCED_MESSAGE} ${params.relativePath}`);
  }
}

function onError(err: Error) {
  send(`The directory syncer encountered an error: ${err.message}`);
}

function send(msg: string) {
  if (process.send !== undefined) {
    process.send(msg);
  }
}
