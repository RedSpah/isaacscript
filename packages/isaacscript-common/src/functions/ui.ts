import { CollectibleType, LevelCurse } from "isaac-typescript-definitions";
import { game } from "../core/cachedClasses";
import { UI_HEART_WIDTH, VectorZero } from "../core/constants";
import { copyVector } from "./vector";

/**
 * In the options menu, players have the ability to set a HUD offset. This uses the current HUD
 * offset to generate a vector that should be added to the corresponding position that you want to
 * draw a UI element.
 *
 * For example:
 * - If the user does not have a HUD offset configured, this function will return `Vector(0, 0)`.
 * - If the user has a HUD offset of 1.0 configured, this function will return `Vector(20, 12)`.
 */
export function getHUDOffsetVector(): Vector {
  // Convert e.g. 0.4 to 4.
  const hudOffset = math.floor(Options.HUDOffset * 10);

  // Expected values are integers between 1 and 10.
  if (hudOffset < 1 || hudOffset > 10) {
    return copyVector(VectorZero);
  }

  const x = hudOffset * 2;
  let y = hudOffset;
  if (y >= 4) {
    y++;
  }
  if (y >= 9) {
    y++;
  }

  return Vector(x, y);
}

/**
 * Returns how many hearts are in the heart UI row. If the player has more than 6 hearts, this
 * function will return 6.
 */
export function getHeartRowLength(player: EntityPlayer): int {
  const maxHearts = player.GetMaxHearts();
  const soulHearts = player.GetSoulHearts();
  const boneHearts = player.GetBoneHearts();

  const combinedHearts = maxHearts + soulHearts + boneHearts * 2; // There are no half bone hearts
  const heartRowLength = combinedHearts / 2;

  // After 6 hearts, the hearts wrap to a second row.
  return Math.min(heartRowLength, 6);
}

/**
 * Helper function to get the width of the first player's hearts on the UI. This is useful for
 * drawing UI elements to the right of where the player's hearts are. Make sure to use this in
 * combination with the `getHUDOffsetVector` helper function.
 */
export function getHeartsUIWidth(): int {
  const level = game.GetLevel();
  const curses = level.GetCurses();
  const player = Isaac.GetPlayer();
  const extraLives = player.GetExtraLives();
  const effects = player.GetEffects();
  const hasHolyMantleEffect = effects.HasCollectibleEffect(
    CollectibleType.HOLY_MANTLE,
  );

  let heartRowLength = getHeartRowLength(player);
  if (hasHolyMantleEffect) {
    heartRowLength++;
  }
  if (curses === LevelCurse.UNKNOWN) {
    heartRowLength = 1;
  }

  let width = heartRowLength * UI_HEART_WIDTH;
  if (extraLives > 9) {
    width += 20;
    if (player.HasCollectible(CollectibleType.GUPPYS_COLLAR)) {
      width += 6;
    }
  } else if (extraLives > 0) {
    width += 16;
    if (player.HasCollectible(CollectibleType.GUPPYS_COLLAR)) {
      width += 4;
    }
  }

  return width;
}

export function getScreenBottomCenterPos(): Vector {
  const bottomRight = getScreenBottomRightPos();
  return Vector(bottomRight.X / 2, bottomRight.Y);
}

export function getScreenBottomLeftPos(): Vector {
  const bottomRight = getScreenBottomRightPos();
  return Vector(0, bottomRight.Y);
}

export function getScreenBottomRightPos(): Vector {
  const screenWidth = Isaac.GetScreenWidth();
  const screenHeight = Isaac.GetScreenHeight();

  return Vector(screenWidth, screenHeight);
}

export function getScreenCenterPos(): Vector {
  const bottomRight = getScreenBottomRightPos();
  return bottomRight.div(2);
}

export function getScreenTopCenterPos(): Vector {
  const bottomRight = getScreenBottomRightPos();
  return Vector(bottomRight.X / 2, 0);
}

export function getScreenTopLeftPos(): Vector {
  return copyVector(VectorZero);
}

export function getScreenTopRightPos(): Vector {
  const bottomRight = getScreenBottomRightPos();
  return Vector(bottomRight.X, 0);
}

/**
 * Get how many hearts are currently being shown on the hearts UI.
 *
 * This function is originally from piber20 Helper.
 */
export function getVisibleHearts(player: EntityPlayer): int {
  const effectiveMaxHearts = player.GetEffectiveMaxHearts();
  const soulHearts = player.GetSoulHearts();
  const boneHearts = player.GetBoneHearts();

  const maxHearts = math.max(effectiveMaxHearts, boneHearts * 2);

  let visibleHearts = math.ceil((maxHearts + soulHearts) / 2);
  if (visibleHearts < 1) {
    visibleHearts = 1;
  }

  return visibleHearts;
}
