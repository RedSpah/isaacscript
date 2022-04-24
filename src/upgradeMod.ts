import { customReviveCallbacksInit } from "./callbacks/customRevive";
import { itemPickupCallbacksInit } from "./callbacks/itemPickup";
import { postBombInitLateCallbackInit } from "./callbacks/postBombInitLate";
import { postBoneSwingCallbackInit } from "./callbacks/postBoneSwing";
import { postCollectibleInitFirstCallbackInit } from "./callbacks/postCollectibleInitFirst";
import { postCursedTeleportCallbackInit } from "./callbacks/postCursedTeleport";
import { postCustomDoorEnterCallbackInit } from "./callbacks/postCustomDoorEnter";
import { postEffectInitLateCallbackInit } from "./callbacks/postEffectInitLate";
import { postEffectStateChangedCallbackInit } from "./callbacks/postEffectStateChanged";
import { postEsauJrCallbacksInit } from "./callbacks/postEsauJr";
import { postFamiliarInitLateCallbackInit } from "./callbacks/postFamiliarInitLate";
import { postFamiliarStateChangedCallbackInit } from "./callbacks/postFamiliarStateChanged";
import { postFlipCallbacksInit } from "./callbacks/postFlip";
import { postGridEntityCallbacksInit } from "./callbacks/postGridEntity";
import { postGridEntityCollisionInit } from "./callbacks/postGridEntityCollision";
import { postItemDischargeCallbackInit } from "./callbacks/postItemDischarged";
import { postKnifeInitLateCallbackInit } from "./callbacks/postKnifeInitLate";
import { postLaserInitLateCallbackInit } from "./callbacks/postLaserInitLate";
import { postNewRoomEarlyCallbackInit } from "./callbacks/postNewRoomEarly";
import { postNPCInitLateCallbackInit } from "./callbacks/postNPCInitLate";
import { postNPCStateChangedCallbackInit } from "./callbacks/postNPCStateChanged";
import { postPickupCollectCallbackInit } from "./callbacks/postPickupCollect";
import { postPickupInitLateCallbackInit } from "./callbacks/postPickupInitLate";
import { postPickupStateChangedCallbackInit } from "./callbacks/postPickupStateChanged";
import { postPlayerChangeHealthCallbackInit } from "./callbacks/postPlayerChangeHealth";
import { postPlayerChangeTypeCallbackInit } from "./callbacks/postPlayerChangeType";
import { postPlayerFatalDamageCallbackInit } from "./callbacks/postPlayerFatalDamage";
import { postPlayerInitLateCallbackInit } from "./callbacks/postPlayerInitLate";
import { postPlayerReorderedCallbacksInit } from "./callbacks/postPlayerReordered";
import { postProjectileInitLateCallbackInit } from "./callbacks/postProjectileInitLate";
import { postPurchaseCallbackInit } from "./callbacks/postPurchase";
import { postSacrificeCallbackInit } from "./callbacks/postSacrifice";
import { postSlotInitUpdateCallbacksInit } from "./callbacks/postSlotInitUpdate";
import { postSlotRenderCallbacksInit } from "./callbacks/postSlotRender";
import { postTearInitLateCallbackInit } from "./callbacks/postTearInitLate";
import { postTearInitVeryLateCallbackInit } from "./callbacks/postTearInitVeryLate";
import { postTransformationCallbackInit } from "./callbacks/postTransformation";
import { postTrinketBreakCallbackInit } from "./callbacks/postTrinketBreak";
import { preBerserkDeathCallbackInit } from "./callbacks/preBerserkDeath";
import { preNewLevelCallbackInit } from "./callbacks/preNewLevel";
import { reorderedCallbacksInit } from "./callbacks/reorderedCallbacks";
import { roomClearChangeCallbackInit } from "./callbacks/roomClearChange";
import { ModUpgraded } from "./classes/ModUpgraded";
import { characterHealthConversionInit } from "./features/characterHealthConversion";
import { characterStatsInit } from "./features/characterStats";
import { debugDisplayInit } from "./features/debugDisplay";
import { deployJSONRoomInit } from "./features/deployJSONRoom";
import { disableInputsInit } from "./features/disableInputs";
import { disableSoundsInit } from "./features/disableSound";
import { fadeInRemoverInit } from "./features/fadeInRemover";
import { fastResetInit } from "./features/fastReset";
import { forgottenSwitchInit } from "./features/forgottenSwitch";
import { getCollectibleItemPoolTypeInit } from "./features/getCollectibleItemPoolType";
import { isPonyActiveInit } from "./features/isPonyActive";
import { playerInventoryInit } from "./features/playerInventory";
import { preventCollectibleRotateInit } from "./features/preventCollectibleRotate";
import { runInNFramesInit } from "./features/runInNFrames";
import { saveDataManagerInit } from "./features/saveDataManager/main";
import { sirenHelpersInit } from "./features/sirenHelpers";
import { taintedLazarusPlayersInit } from "./features/taintedLazarusPlayers";
import {
  areFeaturesInitialized,
  setFeaturesInitialized,
} from "./featuresInitialized";
import { patchErrorFunction } from "./patchErrorFunctions";

/**
 * Use this function to enable the custom features and callbacks provided by `isaacscript-common`.
 *
 * Example:
 * ```ts
 * const modVanilla = RegisterMod("My Mod", 1);
 * const mod = upgradeMod(modVanilla);
 *
 * // Subscribe to vanilla callbacks
 * mod.AddCallback(ModCallbacks.MC_POST_UPDATE, postUpdate);
 *
 * // Subscribe to custom callbacks
 * mod.AddCallbackCustom(ModCallbacksCustom.MC_POST_ITEM_PICKUP, postItemPickup);
 * ```
 *
 * For a list of all custom callbacks, check out the
 * [Function Signatures](https://isaacscript.github.io/docs/function-signatures#custom-callbacks).
 *
 * @param modVanilla The mod object returned by the `RegisterMod` function.
 * @returns The upgraded mod object.
 */
export function upgradeMod(modVanilla: Mod): ModUpgraded {
  patchErrorFunction();

  const mod = new ModUpgraded(modVanilla);

  if (!areFeaturesInitialized()) {
    setFeaturesInitialized();

    // We initialize the PostNewRoomEarly callback first since it is used by the save data manager
    postNewRoomEarlyCallbackInit(mod);

    // We initialized the save data manager second since it is used by the other custom callbacks
    // and features
    saveDataManagerInit(mod);

    // We initialize custom callbacks next since some features use custom callbacks
    initCustomCallbacks(mod);

    initFeaturesMajor(mod);
    initFeaturesMinor(mod);
  }

  return mod;
}

function initCustomCallbacks(mod: ModUpgraded) {
  reorderedCallbacksInit(mod);
  preNewLevelCallbackInit(mod);
  roomClearChangeCallbackInit(mod);
  postPlayerReorderedCallbacksInit(mod);
  postPlayerInitLateCallbackInit(mod); // 1
  postTearInitLateCallbackInit(mod); // 2
  postTearInitVeryLateCallbackInit(mod); // 2
  postFamiliarInitLateCallbackInit(mod); // 3
  postBombInitLateCallbackInit(mod); // 4
  postPickupInitLateCallbackInit(mod); // 5
  postLaserInitLateCallbackInit(mod); // 7
  postKnifeInitLateCallbackInit(mod); // 8
  postProjectileInitLateCallbackInit(mod); // 9
  postNPCInitLateCallbackInit(mod);
  postEffectInitLateCallbackInit(mod); // 1000
  postCollectibleInitFirstCallbackInit(mod);
  postPickupCollectCallbackInit(mod);
  itemPickupCallbacksInit(mod);
  postPlayerChangeTypeCallbackInit(mod);
  postPlayerChangeHealthCallbackInit(mod);
  postPlayerFatalDamageCallbackInit(mod);
  preBerserkDeathCallbackInit(mod);
  customReviveCallbacksInit(mod);
  postFlipCallbacksInit(mod);
  postEsauJrCallbacksInit(mod);
  postTransformationCallbackInit(mod);
  postPurchaseCallbackInit(mod);
  postSacrificeCallbackInit(mod);
  postTrinketBreakCallbackInit(mod);
  postItemDischargeCallbackInit(mod);
  postCursedTeleportCallbackInit(mod);
  postSlotInitUpdateCallbacksInit(mod);
  postSlotRenderCallbacksInit(mod);
  postFamiliarStateChangedCallbackInit(mod);
  postPickupStateChangedCallbackInit(mod);
  postEffectStateChangedCallbackInit(mod);
  postNPCStateChangedCallbackInit(mod);
  postGridEntityCallbacksInit(mod);
  postGridEntityCollisionInit(mod);
  postBoneSwingCallbackInit(mod);
  postCustomDoorEnterCallbackInit();
}

function initFeaturesMajor(mod: ModUpgraded) {
  deployJSONRoomInit(mod);
  runInNFramesInit(mod);
  characterStatsInit(mod);
  characterHealthConversionInit(mod);
}

function initFeaturesMinor(mod: ModUpgraded) {
  disableInputsInit(mod);
  disableSoundsInit(mod);
  fadeInRemoverInit(mod);
  fastResetInit(mod);
  debugDisplayInit(mod);
  forgottenSwitchInit(mod);
  getCollectibleItemPoolTypeInit(mod);
  isPonyActiveInit(mod);
  playerInventoryInit(mod);
  preventCollectibleRotateInit(mod);
  sirenHelpersInit(mod);
  taintedLazarusPlayersInit(mod);
}
