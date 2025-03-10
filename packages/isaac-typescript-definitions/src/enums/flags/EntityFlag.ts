/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * @enum
 * @notExported
 * @rename EntityFlag
 */
const EntityFlagInternal = {
  /** 1 << 0 (1) */
  NO_STATUS_EFFECTS: 1 << 0,

  /** 1 << 1 (2) */
  NO_INTERPOLATE: 1 << 1,

  /** 1 << 2 (4) */
  APPEAR: 1 << 2,

  /** 1 << 3 (8) */
  RENDER_FLOOR: 1 << 3,

  /** 1 << 4 (16) */
  NO_TARGET: 1 << 4,

  /** 1 << 5 (32) */
  FREEZE: 1 << 5,

  /** 1 << 6 (64) */
  POISON: 1 << 6,

  /** 1 << 7 (128) */
  SLOW: 1 << 7,

  /** 1 << 8 (256) */
  CHARM: 1 << 8,

  /** 1 << 9 (512) */
  CONFUSION: 1 << 9,

  /** 1 << 10 (1024) */
  MIDAS_FREEZE: 1 << 10,

  /** 1 << 11 (2048) */
  FEAR: 1 << 11,

  /** 1 << 12 (4096) */
  BURN: 1 << 12,

  /** 1 << 13 (8192) */
  RENDER_WALL: 1 << 13,

  /** 1 << 14 (16384) */
  INTERPOLATION_UPDATE: 1 << 14,

  /** 1 << 15 (32768) */
  APPLY_GRAVITY: 1 << 15,

  /** 1 << 16 (65536) */
  NO_BLOOD_SPLASH: 1 << 16,

  /** 1 << 17 (131072) */
  NO_REMOVE_ON_TEX_RENDER: 1 << 17,

  /** 1 << 18 (262144) */
  NO_DEATH_TRIGGER: 1 << 18,

  /**
   * This shares the same value as `FLAG_LASER_POP` and `FLAG_ITEM_SHOULD_DUPLICATE`, but has a
   * different meaning depending on the entity type.
   *
   * 1 << 19 (524288)
   */
  NO_SPIKE_DAMAGE: 1 << 19,

  /**
   * This shares the same value as `FLAG_NO_SPIKE_DAMAGE` and `FLAG_ITEM_SHOULD_DUPLICATE`, but has
   * a different meaning depending on the entity type.
   *
   * 1 << 19 (524288)
   */
  LASER_POP: 1 << 19,

  /**
   * This shares the same value as `FLAG_NO_SPIKE_DAMAGE` and `FLAG_LASER_POP`, but has a different
   * meaning depending on the entity type.
   *
   * 1 << 19 (524288)
   */
  ITEM_SHOULD_DUPLICATE: 1 << 19,

  /** 1 << 20 (1048576) */
  BOSS_DEATH_TRIGGERED: 1 << 20,

  /** 1 << 21 (2097152) */
  DONT_OVERWRITE: 1 << 21,

  /** 1 << 22 (4194304) */
  SPAWN_STICKY_SPIDERS: 1 << 22,

  /** 1 << 23 (8388608) */
  SPAWN_BLACK_HP: 1 << 23,

  /** 1 << 24 (16777216) */
  SHRINK: 1 << 24,

  /** 1 << 25 (33554432) */
  NO_FLASH_ON_DAMAGE: 1 << 25,

  /** 1 << 26 (67108864) */
  NO_KNOCKBACK: 1 << 26,

  /** 1 << 27 (134217728) */
  SLIPPERY_PHYSICS: 1 << 27,

  /** 1 << 28 (268435456) */
  ADD_JAR_FLY: 1 << 28,

  /** 1 << 29 (536870912) */
  FRIENDLY: 1 << 29,

  /** 1 << 30 (1073741824) */
  NO_PHYSICS_KNOCKBACK: 1 << 30,

  /** 1 << 31 (2147483648) */
  DONT_COUNT_BOSS_HP: 1 << 31,

  /** 1 << 32 (4294967296) */
  NO_SPRITE_UPDATE: 1 << 32,

  /** 1 << 33 */
  CONTAGIOUS: 1 << 33,

  /** 1 << 34 */
  BLEED_OUT: 1 << 34,

  /** 1 << 35 */
  HIDE_HP_BAR: 1 << 35,

  /** 1 << 36 */
  NO_DAMAGE_BLINK: 1 << 36,

  /** 1 << 37 */
  PERSISTENT: 1 << 37,

  /** 1 << 38 */
  BACKDROP_DETAIL: 1 << 38,

  /** 1 << 39 */
  AMBUSH: 1 << 39,

  /** 1 << 40 */
  GLITCH: 1 << 40,

  /** 1 << 41 */
  SPIN: 1 << 41,

  /** 1 << 42 */
  NO_REWARD: 1 << 42,

  /** 1 << 43 */
  REDUCE_GIBS: 1 << 43,

  /** 1 << 44 */
  TRANSITION_UPDATE: 1 << 44,

  /** 1 << 45 */
  NO_PLAYER_CONTROL: 1 << 45,

  /** 1 << 46 */
  NO_QUERY: 1 << 46,

  /** 1 << 47 */
  KNOCKED_BACK: 1 << 47,

  /** 1 << 48 */
  APPLY_IMPACT_DAMAGE: 1 << 48,

  /** 1 << 49 */
  ICE_FROZEN: 1 << 49,

  /** 1 << 50 */
  ICE: 1 << 50,

  /** 1 << 51 */
  MAGNETIZED: 1 << 51,

  /** 1 << 52 */
  BAITED: 1 << 52,

  /** 1 << 53 */
  KILL_SWITCH: 1 << 53,

  /** 1 << 54 */
  WEAKNESS: 1 << 54,

  /** 1 << 55 */
  EXTRA_GORE: 1 << 55,

  /** 1 << 56 */
  BRIMSTONE_MARKED: 1 << 56,

  /** 1 << 57 */
  HELD: 1 << 57,

  /** 1 << 58 */
  THROWN: 1 << 58,

  /** 1 << 59 */
  FRIENDLY_BALL: 1 << 59,
} as const;

type EntityFlagValue = BitFlag & {
  readonly __entityFlagBrand: symbol;
};
type EntityFlagType = {
  [K in keyof typeof EntityFlagInternal]: EntityFlagValue;
};

export const EntityFlag = EntityFlagInternal as EntityFlagType;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type EntityFlag = EntityFlagType[keyof EntityFlagType];

export const EntityFlagZero = 0 as BitFlags<EntityFlag>;
