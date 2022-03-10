import { game } from "../cachedClasses";
import { saveDataManager } from "../features/saveDataManager/exports";
import { hasFlag } from "../functions/flag";
import { getPlayerNumHitsRemaining } from "../functions/player";
import { mapGetPlayer, mapSetPlayer } from "../functions/playerDataStructures";
import { PlayerIndex } from "../types/PlayerIndex";
import {
  postCursedTeleportFire,
  postCursedTeleportHasSubscriptions,
} from "./subscriptions/postCursedTeleport";

const v = {
  run: {
    playersDamageFrameMap: new Map<
      PlayerIndex,
      [lastDamageFrame: int, callbackFiredOnThisFrame: boolean]
    >(),
  },

  level: {
    numSacrifices: 0,
  },
};

/** @internal */
export function postCursedTeleportCallbackInit(mod: Mod): void {
  saveDataManager("postCursedTeleport", v, hasSubscriptions);

  mod.AddCallback(
    ModCallbacks.MC_ENTITY_TAKE_DMG,
    entityTakeDmgPlayer,
    EntityType.ENTITY_PLAYER,
  ); // 11

  mod.AddCallback(
    ModCallbacks.MC_POST_PLAYER_RENDER,
    postPlayerRenderPlayer,
    PlayerVariant.PLAYER, // Co-op babies cannot perform Cursed Eye teleports
  ); // 32
}

function hasSubscriptions() {
  return postCursedTeleportHasSubscriptions();
}

// ModCallbacks.MC_ENTITY_TAKE_DMG (11)
// EntityType.ENTITY_PLAYER (1)
function entityTakeDmgPlayer(
  tookDamage: Entity,
  _damageAmount: float,
  damageFlags: int,
  _damageSource: EntityRef,
  _damageCountdownFrames: int,
) {
  if (!hasSubscriptions()) {
    return;
  }

  incrementNumSacrifices(damageFlags); // Has to be before setting the damage frame
  setDamageFrame(tookDamage, damageFlags);
}

function setDamageFrame(tookDamage: Entity, damageFlags: int) {
  const gameFrameCount = game.GetFrameCount();

  const player = tookDamage.ToPlayer();
  if (player === undefined) {
    return;
  }

  // Don't do anything if we already activated the callback on this frame
  const trackingArray = mapGetPlayer(v.run.playersDamageFrameMap, player);
  if (trackingArray !== undefined) {
    const [lastDamageFrame, callbackFiredOnThisFrame] = trackingArray;
    if (lastDamageFrame === gameFrameCount && callbackFiredOnThisFrame) {
      return;
    }
  }

  // Don't do anything if this could be a Sacrifice Room teleport
  if (isPotentialNaturalTeleportFromSacrificeRoom(damageFlags)) {
    return;
  }

  const newTrackingArray = [gameFrameCount, false];
  mapSetPlayer(v.run.playersDamageFrameMap, player, newTrackingArray);
}

function isPotentialNaturalTeleportFromSacrificeRoom(damageFlags: int) {
  const room = game.GetRoom();
  const roomType = room.GetType();
  const isSpikeDamage = hasFlag(damageFlags, DamageFlag.DAMAGE_SPIKES);

  // Don't record the frame if we are potentially going to the Angel Room or the Dark Room from a
  // Sacrifice Room
  return (
    roomType === RoomType.ROOM_SACRIFICE &&
    isSpikeDamage &&
    (v.level.numSacrifices === 6 || v.level.numSacrifices >= 12)
  );
}

function incrementNumSacrifices(damageFlags: int) {
  const room = game.GetRoom();
  const roomType = room.GetType();
  const isSpikeDamage = hasFlag(damageFlags, DamageFlag.DAMAGE_SPIKES);

  if (roomType === RoomType.ROOM_SACRIFICE && isSpikeDamage) {
    v.level.numSacrifices += 1;
  }
}

// ModCallbacks.MC_POST_PLAYER_RENDER (32)
// PlayerVariant.PLAYER (0)
function postPlayerRenderPlayer(player: EntityPlayer) {
  if (!hasSubscriptions()) {
    return;
  }

  // Retrieve information about this player
  const trackingArray = mapGetPlayer(v.run.playersDamageFrameMap, player);
  if (trackingArray === undefined) {
    return;
  }
  const [lastDamageFrame, callbackActivatedOnThisFrame] = trackingArray;

  if (!playerIsTeleportingFromCursedTeleport(player, lastDamageFrame)) {
    return;
  }

  // Do nothing if the callback already fired on this frame
  if (callbackActivatedOnThisFrame) {
    return;
  }

  const gameFrameCount = game.GetFrameCount();
  const newTrackingArray = [gameFrameCount, true];
  mapSetPlayer(v.run.playersDamageFrameMap, player, newTrackingArray);

  postCursedTeleportFire(player);
}

function playerIsTeleportingFromCursedTeleport(
  player: EntityPlayer,
  lastDamageFrame: int,
) {
  // Check to see if this is the frame that we last took damage
  const gameFrameCount = game.GetFrameCount();
  if (gameFrameCount !== lastDamageFrame) {
    return false;
  }

  // Check to see if this is the 1st frame that we are teleporting
  const sprite = player.GetSprite();
  if (
    !sprite.IsPlaying("TeleportUp") ||
    sprite.GetFrame() !== 1 // The 0th frame never fires
  ) {
    return false;
  }

  // Cursed Eye
  if (player.HasCollectible(CollectibleType.COLLECTIBLE_CURSED_EYE)) {
    return true;
  }

  // Cursed Skull
  const numHitsRemaining = getPlayerNumHitsRemaining(player);
  if (
    player.HasTrinket(TrinketType.TRINKET_CURSED_SKULL) &&
    numHitsRemaining === 1
  ) {
    return true;
  }

  return false;
}
