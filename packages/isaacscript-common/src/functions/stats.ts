import { CacheFlag } from "isaac-typescript-definitions";
import { DEFAULT_PLAYER_STAT_MAP } from "../maps/defaultPlayerStatMap";
import { addTearsStat } from "./tears";

const STAT_CACHE_FLAGS_SET: ReadonlySet<CacheFlag> = new Set([
  CacheFlag.DAMAGE, // 1 << 0
  CacheFlag.FIRE_DELAY, // 1 << 1
  CacheFlag.SHOT_SPEED, // 1 << 2
  CacheFlag.RANGE, // 1 << 3
  CacheFlag.SPEED, // 1 << 4
  CacheFlag.LUCK, // 1 << 10
]);

/**
 * Helper function to add a stat to a player based on the `CacheFlag` provided. Call this function
 * from the `EVALUATE_CACHE` callback.
 *
 * Note that for `CacheFlag.FIRE_DELAY`, the "amount" argument will be interpreted as the tear stat
 * to add (and not the amount to mutate `EntityPlayer.MaxFireDelay` by).
 *
 * This function supports the following cache flags:
 * - CacheFlag.DAMAGE (1 << 0)
 * - CacheFlag.FIRE_DELAY (1 << 1)
 * - CacheFlag.SHOT_SPEED (1 << 2)
 * - CacheFlag.RANGE (1 << 3)
 * - CacheFlag.SPEED (1 << 4)
 * - CacheFlag.LUCK (1 << 10)
 */
export function addStat(
  player: EntityPlayer,
  cacheFlag: CacheFlag,
  amount: number,
): void {
  if (!STAT_CACHE_FLAGS_SET.has(cacheFlag)) {
    error(
      `You cannot add a stat to a player with the cache flag of: ${cacheFlag}`,
    );
  }

  switch (cacheFlag) {
    // 1 << 0
    case CacheFlag.DAMAGE: {
      player.Damage += amount;
      break;
    }

    // 1 << 1
    case CacheFlag.FIRE_DELAY: {
      addTearsStat(player, amount);
      break;
    }

    // 1 << 2
    case CacheFlag.SHOT_SPEED: {
      player.ShotSpeed += amount;
      break;
    }

    // 1 << 3
    case CacheFlag.RANGE: {
      player.TearHeight += amount;
      break;
    }

    // 1 << 4
    case CacheFlag.SPEED: {
      player.MoveSpeed += amount;
      break;
    }

    // 1 << 10
    case CacheFlag.LUCK: {
      player.Luck += amount;
      break;
    }
  }
}

/**
 * Returns the starting stat that Isaac (the default character) starts with. For example, if you
 * pass this function `CacheFlag.DAMAGE`, it will return 3.5.
 *
 * Note that the default fire delay is represented in the tear stat, not the `MaxFireDelay` value.
 */
export function getDefaultPlayerStat(cacheFlag: CacheFlag): number | undefined {
  return DEFAULT_PLAYER_STAT_MAP.get(cacheFlag);
}
