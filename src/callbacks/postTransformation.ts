import { saveDataManager } from "../features/saveDataManager";
import { initArray } from "../functions/array";
import { getPlayerIndex, PlayerIndex } from "../functions/player";
import ModCallbacksCustom from "../types/ModCallbacksCustom";
import ModUpgraded from "../types/ModUpgraded";
import * as postTransformation from "./subscriptions/postTransformation";

const v = {
  run: {
    transformations: new Map<PlayerIndex, boolean[]>(),
  },
};

export function init(mod: ModUpgraded): void {
  saveDataManager("postTransformationCallback", v, hasSubscriptions);

  mod.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_PLAYER_INIT_REORDERED,
    postPlayerInitReorderedPlayer,
    PlayerVariant.PLAYER, // Co-op babies cannot transform
  );

  mod.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_PLAYER_UPDATE_REORDERED,
    postPlayerUpdateReorderedPlayer,
    PlayerVariant.PLAYER, // Co-op babies cannot transform
  );
}

function hasSubscriptions() {
  return postTransformation.hasSubscriptions();
}

// ModCallbacks.MC_POST_PLAYER_INIT_REORDERED
// PlayerVariant.PLAYER (0)
function postPlayerInitReorderedPlayer(player: EntityPlayer) {
  if (!hasSubscriptions()) {
    return;
  }

  const index = getPlayerIndex(player);
  const transformations = initArray(false, PlayerForm.NUM_PLAYER_FORMS - 1);
  v.run.transformations.set(index, transformations);
}

// ModCallbacksCustom.MC_POST_PLAYER_UPDATE_REORDERED
// PlayerVariant.PLAYER (0)
function postPlayerUpdateReorderedPlayer(player: EntityPlayer) {
  if (!hasSubscriptions()) {
    return;
  }

  const index = getPlayerIndex(player);
  const transformations = v.run.transformations.get(index);
  if (transformations === undefined) {
    error(`Failed to get the transformation array for player: ${index}`);
  }

  for (
    let playerForm = 0;
    playerForm < PlayerForm.NUM_PLAYER_FORMS;
    playerForm++
  ) {
    const hasForm = player.HasPlayerForm(playerForm);
    const storedForm = transformations[playerForm];
    if (hasForm !== storedForm) {
      transformations[playerForm] = hasForm;
      postTransformation.fire(player, playerForm, hasForm);
    }
  }
}
