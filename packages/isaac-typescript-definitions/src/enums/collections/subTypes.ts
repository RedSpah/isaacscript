/* eslint-disable sort-exports/sort-exports */

/**
 * For `EntityType.PLAYER` (1), `PlayerVariant.PLAYER` (0).
 *
 * This is the sub-type of a player.
 *
 * Conventionally, variables that have this type are represented as "character" instead of
 * "playerType", since the former is more descriptive of what this value actually represents.
 */
export enum PlayerType {
  /** Used in the secret Possessor Mode added in Repentance. */
  POSSESSOR = -1,

  ISAAC = 0,
  MAGDALENE = 1,
  CAIN = 2,
  JUDAS = 3,
  BLUE_BABY = 4,
  EVE = 5,
  SAMSON = 6,
  AZAZEL = 7,
  LAZARUS = 8,
  EDEN = 9,
  LOST = 10,

  /** Lazarus Risen, from the Lazarus' Rags collectible. */
  LAZARUS_2 = 11,

  /** Dark Judas, from the Judas' Shadow collectible. */
  DARK_JUDAS = 12,

  LILITH = 13,
  KEEPER = 14,
  APOLLYON = 15,
  FORGOTTEN = 16,
  SOUL = 17,
  BETHANY = 18,
  JACOB = 19,
  ESAU = 20,

  /** Tainted Isaac */
  ISAAC_B = 21,

  /** Tainted Magdalene */
  MAGDALENE_B = 22,

  /** Tainted Cain */
  CAIN_B = 23,

  /** Tainted Judas */
  JUDAS_B = 24,

  /** Tainted Blue Baby */
  BLUE_BABY_B = 25,

  /** Tainted Eve */
  EVE_B = 26,

  /** Tainted Samson */
  SAMSON_B = 27,

  /** Tainted Azazel */
  AZAZEL_B = 28,

  /** Tainted Lazarus */
  LAZARUS_B = 29,

  /** Tainted Eden */
  EDEN_B = 30,

  /** Tainted Lost */
  LOST_B = 31,

  /** Tainted Lilith */
  LILITH_B = 32,

  /** Tainted Keeper */
  KEEPER_B = 33,

  /** Tainted Apollyon */
  APOLLYON_B = 34,

  /** Tainted Forgotten */
  FORGOTTEN_B = 35,

  /** Tainted Bethany */
  BETHANY_B = 36,

  /** Tainted Jacob */
  JACOB_B = 37,

  /** Dead Tainted Lazarus */
  LAZARUS_2_B = 38,

  /** Tainted Jacob in "Lost" form. */
  JACOB_2_B = 39,

  /** Tainted Soul */
  SOUL_B = 40,
}

/** For `EntityType.PLAYER` (1), `PlayerVariant.COOP_BABY` (1). */
export enum BabySubType {
  UNASSIGNED = -1,
  SPIDER = 0,
  LOVE = 1,
  BLOAT = 2,
  WATER = 3,
  PSY = 4,
  CURSED = 5,
  TROLL = 6,
  YBAB = 7,
  COCKEYED = 8,
  HOST = 9,
  LOST = 10,
  CUTE = 11,
  CROW = 12,
  SHADOW = 13,
  GLASS = 14,
  GOLD = 15,
  CY = 16,
  BEAN = 17,
  MAG = 18,
  WRATH = 19,
  WRAPPED = 20,
  BEGOTTEN = 21,
  DEAD = 22,
  FIGHTING = 23,
  ZERO = 24,
  GLITCH = 25,
  MAGNET = 26,
  BLACK = 27,
  RED = 28,
  WHITE = 29,
  BLUE = 30,
  RAGE = 31,
  CRY = 32,
  YELLOW = 33,
  LONG = 34,
  GREEN = 35,
  LIL = 36,
  BIG = 37,
  BROWN = 38,
  NOOSE = 39,
  HIVE = 40,
  BUDDY = 41,
  COLORFUL = 42,
  WHORE = 43,
  CRACKED = 44,
  DRIPPING = 45,
  BLINDING = 46,
  SUCKY = 47,
  DARK = 48,
  PICKY = 49,
  REVENGE = 50,
  BELIAL = 51,
  SALE = 52,
  GOAT = 53,
  SUPER_GREED = 54,
  MORT = 55,
  APOLLYON = 56,
  BONE = 57,
  BOUND = 58,
  FOUND_SOUL = 59,
  LOST_WHITE = 60,
  LOST_BLACK = 61,
  LOST_BLUE = 62,
  LOST_GREY = 63,
  WISP = 64,
  DOUBLE = 65,
  GLOWING = 66,
  ILLUSION = 67,
  HOPE = 68,
  SOLOMON_A = 69,
  SOLOMON_B = 70,
  BASIC = 71,
}

/** For `EntityType.FAMILIAR` (3), `FamiliarVariant.BLUE_FLY` (43). */
export enum BlueFlySubType {
  /** A standard fly, like what you get from using Guppy's Head. */
  BLUE_FLY = 0,

  /** Red (explosive) */
  WRATH = 1,

  /** Green (poison) */
  PESTILENCE = 2,

  /** Yellow (slowing) */
  FAMINE = 3,

  /** Black (double-damage) */
  DEATH = 4,

  /** White */
  CONQUEST = 5,
}

/** For `EntityType.FAMILIAR` (3), `FamiliarVariant.DIP` (201). */
export enum DipFamiliarSubType {
  NORMAL = 0,
  RED = 1,
  CORNY = 2,
  GOLD = 3,
  RAINBOW = 4,
  BLACK = 5,
  WHITE = 6,
  STONE = 12,
  FLAMING = 13,
  STINKY = 14,
  BROWNIE = 20,
}

/** For `EntityType.FAMILIAR` (3), `FamiliarVariant.BLOOD_BABY` (238). */
export enum BloodClotSubType {
  RED = 0,
  SOUL = 1,
  BLACK = 2,
  ETERNAL = 3,
  GOLD = 4,
  BONE = 5,
  ROTTEN = 6,

  /** Spawned by the Blood Clot trinket; cannot be turned into health by Sumptorium. */
  RED_NO_SUMPTORIUM = 7,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.NULL` (0). */
export enum PickupNullSubType {
  /** Has a chance to spawn any possible pickup, including collectibles. */
  ALL = 0,

  EXCLUDE_COLLECTIBLES_CHESTS = 1,
  EXCLUDE_COLLECTIBLES = 2,
  EXCLUDE_COLLECTIBLES_CHESTS_COINS = 3,
  EXCLUDE_COLLECTIBLES_TRINKETS_CHESTS = 4,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.HEART` (10). */
export enum HeartSubType {
  /**
   * Spawning hearts with this sub-type will produce a random heart with the following
   * probabilities:
   *
   * - `HeartSubType.FULL` (1) - 39.98%
   * - `HeartSubType.HALF` (2) - 39.99%
   * - `HeartSubType.SOUL` (3) - 6.73%
   * - `HeartSubType.ETERNAL` (4) - 1.80%
   * - `HeartSubType.DOUBLE_PACK` (5) - 4.21%
   * - `HeartSubType.BLACK` (6) - 0.50%
   * - `HeartSubType.GOLDEN` (7) - 0.63%
   * - `HeartSubType.HALF_SOUL` (8) - 2.24%
   * - `HeartSubType.SCARED` (9) - 0.87%
   * - `HeartSubType.BLENDED` (10) - 0.87%
   * - `HeartSubType.BONE` (11) - 0.47%
   * - `HeartSubType.ROTTEN` (12) - 1.71%
   */
  NULL = 0,

  FULL = 1,
  HALF = 2,
  SOUL = 3,
  ETERNAL = 4,
  DOUBLE_PACK = 5,
  BLACK = 6,
  GOLDEN = 7,
  HALF_SOUL = 8,
  SCARED = 9,
  BLENDED = 10,
  BONE = 11,
  ROTTEN = 12,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.COIN` (20). */
export enum CoinSubType {
  /**
   * Spawning coins with this sub-type will produce a random coin with the following probabilities:
   *
   * - `CoinSubType.PENNY` (1) - 92.63%
   * - `CoinSubType.NICKEL` (2) - 4.68%
   * - `CoinSubType.DIME` (3) - 1.00%
   * - `CoinSubType.DOUBLE_PACK` (4) - 0.00% (never spawns)
   * - `CoinSubType.LUCKY_PENNY` (5) - 0.94%
   * - `CoinSubType.STICKY_NICKEL` (6) - 0.25%
   * - `CoinSubType.GOLDEN` (7) - 0.50%
   */
  NULL = 0,

  PENNY = 1,
  NICKEL = 2,
  DIME = 3,
  DOUBLE_PACK = 4,
  LUCKY_PENNY = 5,
  STICKY_NICKEL = 6,
  GOLDEN = 7,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.KEY` (30). */
export enum KeySubType {
  /**
   * Spawning keys with this sub-type will produce a random key with the following probabilities:
   *
   * - `KeySubType.NORMAL` (1) - 96.08%
   * - `KeySubType.GOLDEN` (2) - 1.97%
   * - `KeySubType.DOUBLE_PACK` (3) - 0.00% (never spawns)
   * - `KeySubType.CHARGED` (4) - 1.96%
   */
  NULL = 0,

  NORMAL = 1,
  GOLDEN = 2,
  DOUBLE_PACK = 3,
  CHARGED = 4,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.BOMB` (40). */
export enum BombSubType {
  /**
   * Spawning bombs with this sub-type will produce a random bomb with the following probabilities:
   *
   * - `BombSubType.NORMAL` (1) - 74.84%
   * - `BombSubType.DOUBLE_PACK` (2) - 12.47%
   * - `BombSubType.TROLL` (3) - 9.9%
   * - `BombSubType.GOLDEN` (4) - 0.89%
   * - `BombSubType.MEGA_TROLL` (5) - 1.78%
   * - `BombSubType.GOLDEN_TROLL` (6) - 0.12%
   * - `BombSubType.GIGA` (7) - 0.00% (never spawns)
   */
  NULL = 0,

  NORMAL = 1,
  DOUBLE_PACK = 2,
  TROLL = 3,
  GOLDEN = 4,
  MEGA_TROLL = 5,
  GOLDEN_TROLL = 6,
  GIGA = 7,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.POOP` (42). */
export enum PoopPickupSubType {
  /** Equal to "Poop Nugget" in "entities2.xml". */
  SMALL = 0,

  /** Equal to "Big Poop Nugget" in "entities2.xml". */
  BIG = 1,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.CHEST` (50). */
export enum ChestSubType {
  OPENED = 0,
  CLOSED = 1,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.SACK` (69). */
export enum SackSubType {
  /**
   * Spawning sacks with this sub-type will produce a random sack with the following probabilities:
   *
   * - `SackSubType.NORMAL` (1) - 99.0%
   * - `SackSubType.BLACK` (2) - 1.0%
   */
  NULL = 0,

  NORMAL = 1,
  BLACK = 2,
}

/**
 * For `EntityType.PICKUP` (5), `PickupVariant.PILL` (70).
 *
 * This is the sub-type of a pill.
 */
export enum PillColor {
  /**
   * Spawning pills with this sub-type will produce a random pill with the following probabilities:
   *
   * - Random normal pill - 97.86%
   * - Specific normal pill - 7.53%
   * - Gold pill - 0.7%
   * - Random horse pill - 1.43%
   * - Specific horse pill - 0.11%
   * - Horse gold pill - 0.01%
   */
  NULL = 0,

  BLUE_BLUE = 1,
  WHITE_BLUE = 2,
  ORANGE_ORANGE = 3,
  WHITE_WHITE = 4,
  RED_DOTS_RED = 5,
  PINK_RED = 6,
  BLUE_CADET_BLUE = 7,
  YELLOW_ORANGE = 8,
  ORANGE_DOTS_WHITE = 9,
  WHITE_AZURE = 10,
  BLACK_YELLOW = 11,
  WHITE_BLACK = 12,
  WHITE_YELLOW = 13,

  GOLD = 14,

  HORSE_BLUE_BLUE = 2049,
  HORSE_WHITE_BLUE = 2050,
  HORSE_ORANGE_ORANGE = 2051,
  HORSE_WHITE_WHITE = 2052,
  HORSE_RED_DOTS_RED = 2053,
  HORSE_PINK_RED = 2054,
  HORSE_BLUE_CADET_BLUE = 2055,
  HORSE_YELLOW_ORANGE = 2056,
  HORSE_ORANGE_DOTS_WHITE = 2057,
  HORSE_WHITE_AZURE = 2058,
  HORSE_BLACK_YELLOW = 2059,
  HORSE_WHITE_BLACK = 2060,
  HORSE_WHITE_YELLOW = 2061,

  HORSE_GOLD = 2062,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.LIL_BATTERY` (90). */
export enum BatterySubType {
  /**
   * Spawning batteries with this sub-type will produce a random battery with the following
   * probabilities:
   *
   * - `BatterySubType.NORMAL` (1) - 32.72%
   * - `BatterySubType.MICRO` (2) - 65.44%
   * - `BatterySubType.MEGA` (3) - 1.00%
   * - `BatterySubType.GOLDEN` (4) - 0.83%
   */
  NULL = 0,

  NORMAL = 1,
  MICRO = 2,
  MEGA = 3,
  GOLDEN = 4,
}

/**
 * For `EntityType.PICKUP` (5), `PickupVariant.COLLECTIBLE` (100).
 *
 * This is the sub-type of a collectible.
 */
export enum CollectibleType {
  /** Spawning collectibles with this sub-type will produce a random collectible. */
  NULL = 0,

  SAD_ONION = 1,
  INNER_EYE = 2,
  SPOON_BENDER = 3,
  CRICKETS_HEAD = 4,
  MY_REFLECTION = 5,
  NUMBER_ONE = 6,
  BLOOD_OF_THE_MARTYR = 7,
  BROTHER_BOBBY = 8,
  SKATOLE = 9,
  HALO_OF_FLIES = 10,
  ONE_UP = 11,
  MAGIC_MUSHROOM = 12,
  VIRUS = 13,
  ROID_RAGE = 14,

  /** <3 */
  HEART = 15,

  RAW_LIVER = 16,
  SKELETON_KEY = 17,
  DOLLAR = 18,
  BOOM = 19,
  TRANSCENDENCE = 20,
  COMPASS = 21,
  LUNCH = 22,
  DINNER = 23,
  DESSERT = 24,
  BREAKFAST = 25,
  ROTTEN_MEAT = 26,
  WOODEN_SPOON = 27,
  BELT = 28,
  MOMS_UNDERWEAR = 29,
  MOMS_HEELS = 30,
  MOMS_LIPSTICK = 31,
  WIRE_COAT_HANGER = 32,
  BIBLE = 33,
  BOOK_OF_BELIAL = 34,
  NECRONOMICON = 35,
  POOP = 36,
  MR_BOOM = 37,
  TAMMYS_HEAD = 38,
  MOMS_BRA = 39,
  KAMIKAZE = 40,
  MOMS_PAD = 41,
  BOBS_ROTTEN_HEAD = 42,
  TELEPORT = 44,
  YUM_HEART = 45,
  LUCKY_FOOT = 46,
  DOCTORS_REMOTE = 47,
  CUPIDS_ARROW = 48,
  SHOOP_DA_WHOOP = 49,
  STEVEN = 50,
  PENTAGRAM = 51,
  DR_FETUS = 52,
  MAGNETO = 53,
  TREASURE_MAP = 54,
  MOMS_EYE = 55,
  LEMON_MISHAP = 56,
  DISTANT_ADMIRATION = 57,
  BOOK_OF_SHADOWS = 58,

  /**
   * This is the collectible that Judas is granted when he picks up Birthright. It acts in a similar
   * way to Book of Virtues.
   */
  BOOK_OF_BELIAL_BIRTHRIGHT = 59,

  LADDER = 60,
  CHARM_VAMPIRE = 62,
  BATTERY = 63,
  STEAM_SALE = 64,
  ANARCHIST_COOKBOOK = 65,
  HOURGLASS = 66,
  SISTER_MAGGY = 67,
  TECHNOLOGY = 68,
  CHOCOLATE_MILK = 69,
  GROWTH_HORMONES = 70,
  MINI_MUSH = 71,
  ROSARY = 72,
  CUBE_OF_MEAT = 73,
  QUARTER = 74,
  PHD = 75,
  XRAY_VISION = 76,
  MY_LITTLE_UNICORN = 77,
  BOOK_OF_REVELATIONS = 78,
  MARK = 79,
  PACT = 80,
  DEAD_CAT = 81,
  LORD_OF_THE_PIT = 82,
  NAIL = 83,
  WE_NEED_TO_GO_DEEPER = 84,
  DECK_OF_CARDS = 85,
  MONSTROS_TOOTH = 86,
  LOKIS_HORNS = 87,
  LITTLE_CHUBBY = 88,
  SPIDER_BITE = 89,
  SMALL_ROCK = 90,
  SPELUNKER_HAT = 91,
  SUPER_BANDAGE = 92,
  GAMEKID = 93,
  SACK_OF_PENNIES = 94,
  ROBO_BABY = 95,
  LITTLE_CHAD = 96,
  BOOK_OF_SIN = 97,
  RELIC = 98,
  LITTLE_GISH = 99,
  LITTLE_STEVEN = 100,
  HALO = 101,
  MOMS_BOTTLE_OF_PILLS = 102,
  COMMON_COLD = 103,
  PARASITE = 104,
  D6 = 105,
  MR_MEGA = 106,
  PINKING_SHEARS = 107,
  WAFER = 108,
  MONEY_EQUALS_POWER = 109,
  MOMS_CONTACTS = 110,
  BEAN = 111,
  GUARDIAN_ANGEL = 112,
  DEMON_BABY = 113,
  MOMS_KNIFE = 114,
  OUIJA_BOARD = 115,
  NINE_VOLT = 116,
  DEAD_BIRD = 117,
  BRIMSTONE = 118,
  BLOOD_BAG = 119,
  ODD_MUSHROOM_THIN = 120,
  ODD_MUSHROOM_LARGE = 121,
  WHORE_OF_BABYLON = 122,
  MONSTER_MANUAL = 123,
  DEAD_SEA_SCROLLS = 124,
  BOBBY_BOMB = 125,
  RAZOR_BLADE = 126,
  FORGET_ME_NOW = 127,
  FOREVER_ALONE = 128,
  BUCKET_OF_LARD = 129,
  PONY = 130,
  BOMB_BAG = 131,
  LUMP_OF_COAL = 132,
  GUPPYS_PAW = 133,
  GUPPYS_TAIL = 134,
  IV_BAG = 135,
  BEST_FRIEND = 136,
  REMOTE_DETONATOR = 137,
  STIGMATA = 138,
  MOMS_PURSE = 139,
  BOBS_CURSE = 140,
  PAGEANT_BOY = 141,
  SCAPULAR = 142,
  SPEED_BALL = 143,
  BUM_FRIEND = 144,
  GUPPYS_HEAD = 145,
  PRAYER_CARD = 146,
  NOTCHED_AXE = 147,
  INFESTATION = 148,
  IPECAC = 149,
  TOUGH_LOVE = 150,
  MULLIGAN = 151,
  TECHNOLOGY_2 = 152,
  MUTANT_SPIDER = 153,
  CHEMICAL_PEEL = 154,
  PEEPER = 155,
  HABIT = 156,
  BLOODY_LUST = 157,
  CRYSTAL_BALL = 158,
  SPIRIT_OF_THE_NIGHT = 159,
  CRACK_THE_SKY = 160,
  ANKH = 161,
  CELTIC_CROSS = 162,
  GHOST_BABY = 163,
  CANDLE = 164,
  CAT_O_NINE_TAILS = 165,
  D20 = 166,
  HARLEQUIN_BABY = 167,
  EPIC_FETUS = 168,
  POLYPHEMUS = 169,
  DADDY_LONGLEGS = 170,
  SPIDER_BUTT = 171,
  SACRIFICIAL_DAGGER = 172,
  MITRE = 173,
  RAINBOW_BABY = 174,
  DADS_KEY = 175,
  STEM_CELLS = 176,
  PORTABLE_SLOT = 177,
  HOLY_WATER = 178,
  FATE = 179,
  BLACK_BEAN = 180,
  WHITE_PONY = 181,
  SACRED_HEART = 182,
  TOOTH_PICKS = 183,
  HOLY_GRAIL = 184,
  DEAD_DOVE = 185,
  BLOOD_RIGHTS = 186,
  GUPPYS_HAIRBALL = 187,
  ABEL = 188,
  SMB_SUPER_FAN = 189,
  PYRO = 190,
  THREE_DOLLAR_BILL = 191,
  TELEPATHY_BOOK = 192,
  MEAT = 193,
  MAGIC_8_BALL = 194,
  MOMS_COIN_PURSE = 195,
  SQUEEZY = 196,
  JESUS_JUICE = 197,
  BOX = 198,
  MOMS_KEY = 199,
  MOMS_EYESHADOW = 200,
  IRON_BAR = 201,
  MIDAS_TOUCH = 202,
  HUMBLING_BUNDLE = 203,
  FANNY_PACK = 204,
  SHARP_PLUG = 205,
  GUILLOTINE = 206,
  BALL_OF_BANDAGES = 207,
  CHAMPION_BELT = 208,
  BUTT_BOMBS = 209,
  GNAWED_LEAF = 210,
  SPIDERBABY = 211,
  GUPPYS_COLLAR = 212,
  LOST_CONTACT = 213,
  ANEMIC = 214,
  GOAT_HEAD = 215,
  CEREMONIAL_ROBES = 216,
  MOMS_WIG = 217,
  PLACENTA = 218,
  OLD_BANDAGE = 219,
  SAD_BOMBS = 220,
  RUBBER_CEMENT = 221,
  ANTI_GRAVITY = 222,
  PYROMANIAC = 223,
  CRICKETS_BODY = 224,
  GIMPY = 225,
  BLACK_LOTUS = 226,
  PIGGY_BANK = 227,
  MOMS_PERFUME = 228,
  MONSTROS_LUNG = 229,
  ABADDON = 230,
  BALL_OF_TAR = 231,
  STOP_WATCH = 232,
  TINY_PLANET = 233,
  INFESTATION_2 = 234,
  E_COLI = 236,
  DEATHS_TOUCH = 237,
  KEY_PIECE_1 = 238,
  KEY_PIECE_2 = 239,
  EXPERIMENTAL_TREATMENT = 240,
  CONTRACT_FROM_BELOW = 241,
  INFAMY = 242,
  TRINITY_SHIELD = 243,
  TECH_5 = 244,
  TWENTY_TWENTY = 245,
  BLUE_MAP = 246,
  BFFS = 247,
  HIVE_MIND = 248,
  THERES_OPTIONS = 249,
  BOGO_BOMBS = 250,
  STARTER_DECK = 251,
  LITTLE_BAGGY = 252,
  MAGIC_SCAB = 253,
  BLOOD_CLOT = 254,
  SCREW = 255,
  HOT_BOMBS = 256,
  FIRE_MIND = 257,
  MISSING_NO = 258,
  DARK_MATTER = 259,
  BLACK_CANDLE = 260,
  PROPTOSIS = 261,
  MISSING_PAGE_2 = 262,
  CLEAR_RUNE = 263,
  SMART_FLY = 264,
  DRY_BABY = 265,
  JUICY_SACK = 266,
  ROBO_BABY_2 = 267,
  ROTTEN_BABY = 268,
  HEADLESS_BABY = 269,
  LEECH = 270,
  MYSTERY_SACK = 271,
  BBF = 272,
  BOBS_BRAIN = 273,
  BEST_BUD = 274,
  LIL_BRIMSTONE = 275,
  ISAACS_HEART = 276,
  LIL_HAUNT = 277,
  DARK_BUM = 278,
  BIG_FAN = 279,
  SISSY_LONGLEGS = 280,
  PUNCHING_BAG = 281,
  HOW_TO_JUMP = 282,
  D100 = 283,
  D4 = 284,
  D10 = 285,
  BLANK_CARD = 286,
  BOOK_OF_SECRETS = 287,
  BOX_OF_SPIDERS = 288,
  RED_CANDLE = 289,
  JAR = 290,
  FLUSH = 291,
  SATANIC_BIBLE = 292,
  HEAD_OF_KRAMPUS = 293,
  BUTTER_BEAN = 294,
  MAGIC_FINGERS = 295,
  CONVERTER = 296,
  BLUE_BOX = 297,
  UNICORN_STUMP = 298,
  TAURUS = 299,
  ARIES = 300,
  CANCER = 301,
  LEO = 302,
  VIRGO = 303,
  LIBRA = 304,
  SCORPIO = 305,
  SAGITTARIUS = 306,
  CAPRICORN = 307,
  AQUARIUS = 308,
  PISCES = 309,
  EVES_MASCARA = 310,
  JUDAS_SHADOW = 311,
  MAGGYS_BOW = 312,
  HOLY_MANTLE = 313,
  THUNDER_THIGHS = 314,
  STRANGE_ATTRACTOR = 315,
  CURSED_EYE = 316,
  MYSTERIOUS_LIQUID = 317,
  GEMINI = 318,
  CAINS_OTHER_EYE = 319,
  BLUE_BABYS_ONLY_FRIEND = 320,
  SAMSONS_CHAINS = 321,
  MONGO_BABY = 322,
  ISAACS_TEARS = 323,
  UNDEFINED = 324,
  SCISSORS = 325,
  BREATH_OF_LIFE = 326,
  POLAROID = 327,
  NEGATIVE = 328,
  LUDOVICO_TECHNIQUE = 329,
  SOY_MILK = 330,
  GODHEAD = 331,
  LAZARUS_RAGS = 332,
  MIND = 333,
  BODY = 334,
  SOUL = 335,
  DEAD_ONION = 336,
  BROKEN_WATCH = 337,
  BOOMERANG = 338,
  SAFETY_PIN = 339,
  CAFFEINE_PILL = 340,
  TORN_PHOTO = 341,
  BLUE_CAP = 342,
  LATCH_KEY = 343,
  MATCH_BOOK = 344,
  SYNTHOIL = 345,
  SNACK = 346,
  DIPLOPIA = 347,
  PLACEBO = 348,
  WOODEN_NICKEL = 349,
  TOXIC_SHOCK = 350,
  MEGA_BEAN = 351,
  GLASS_CANNON = 352,
  BOMBER_BOY = 353,
  CRACK_JACKS = 354,
  MOMS_PEARLS = 355,
  CAR_BATTERY = 356,
  BOX_OF_FRIENDS = 357,
  WIZ = 358,
  EIGHT_INCH_NAILS = 359,
  INCUBUS = 360,
  FATES_REWARD = 361,
  LIL_CHEST = 362,
  SWORN_PROTECTOR = 363,
  FRIEND_ZONE = 364,
  LOST_FLY = 365,
  SCATTER_BOMBS = 366,
  STICKY_BOMBS = 367,
  EPIPHORA = 368,
  CONTINUUM = 369,
  MR_DOLLY = 370,
  CURSE_OF_THE_TOWER = 371,
  CHARGED_BABY = 372,
  DEAD_EYE = 373,
  HOLY_LIGHT = 374,
  HOST_HAT = 375,
  RESTOCK = 376,
  BURSTING_SACK = 377,
  NUMBER_TWO = 378,
  PUPULA_DUPLEX = 379,
  PAY_TO_PLAY = 380,
  EDENS_BLESSING = 381,
  FRIEND_BALL = 382,
  TEAR_DETONATOR = 383,
  LIL_GURDY = 384,
  BUMBO = 385,
  D12 = 386,
  CENSER = 387,
  KEY_BUM = 388,
  RUNE_BAG = 389,
  SERAPHIM = 390,
  BETRAYAL = 391,
  ZODIAC = 392,
  SERPENTS_KISS = 393,
  MARKED = 394,
  TECH_X = 395,
  VENTRICLE_RAZOR = 396,
  TRACTOR_BEAM = 397,
  GODS_FLESH = 398,
  MAW_OF_THE_VOID = 399,
  SPEAR_OF_DESTINY = 400,
  EXPLOSIVO = 401,
  CHAOS = 402,
  SPIDER_MOD = 403,
  FARTING_BABY = 404,
  GB_BUG = 405,
  D8 = 406,
  PURITY = 407,
  ATHAME = 408,
  EMPTY_VESSEL = 409,
  EVIL_EYE = 410,
  LUSTY_BLOOD = 411,
  CAMBION_CONCEPTION = 412,
  IMMACULATE_CONCEPTION = 413,
  MORE_OPTIONS = 414,
  CROWN_OF_LIGHT = 415,
  DEEP_POCKETS = 416,
  SUCCUBUS = 417,
  FRUIT_CAKE = 418,
  TELEPORT_2 = 419,
  BLACK_POWDER = 420,
  KIDNEY_BEAN = 421,
  GLOWING_HOUR_GLASS = 422,
  CIRCLE_OF_PROTECTION = 423,
  SACK_HEAD = 424,
  NIGHT_LIGHT = 425,
  OBSESSED_FAN = 426,
  MINE_CRAFTER = 427,
  PJS = 428,
  HEAD_OF_THE_KEEPER = 429,
  PAPA_FLY = 430,
  MULTIDIMENSIONAL_BABY = 431,
  GLITTER_BOMBS = 432,
  MY_SHADOW = 433,
  JAR_OF_FLIES = 434,
  LIL_LOKI = 435,
  MILK = 436,
  D7 = 437,
  BINKY = 438,
  MOMS_BOX = 439,
  KIDNEY_STONE = 440,
  MEGA_BLAST = 441,
  DARK_PRINCES_CROWN = 442,
  APPLE = 443,
  LEAD_PENCIL = 444,
  DOG_TOOTH = 445,
  DEAD_TOOTH = 446,
  LINGER_BEAN = 447,
  SHARD_OF_GLASS = 448,
  METAL_PLATE = 449,
  EYE_OF_GREED = 450,
  TAROT_CLOTH = 451,
  VARICOSE_VEINS = 452,
  COMPOUND_FRACTURE = 453,
  POLYDACTYLY = 454,
  DADS_LOST_COIN = 455,
  MIDNIGHT_SNACK = 456,
  CONE_HEAD = 457,
  BELLY_BUTTON = 458,
  SINUS_INFECTION = 459,
  GLAUCOMA = 460,
  PARASITOID = 461,
  EYE_OF_BELIAL = 462,
  SULFURIC_ACID = 463,
  GLYPH_OF_BALANCE = 464,
  ANALOG_STICK = 465,
  CONTAGION = 466,
  FINGER = 467,
  SHADE = 468,
  DEPRESSION = 469,
  HUSHY = 470,
  LIL_MONSTRO = 471,
  KING_BABY = 472,
  BIG_CHUBBY = 473,
  BROKEN_GLASS_CANNON = 474,
  PLAN_C = 475,
  D1 = 476,
  VOID = 477,
  PAUSE = 478,
  SMELTER = 479,
  COMPOST = 480,
  DATAMINER = 481,
  CLICKER = 482,
  MAMA_MEGA = 483,
  WAIT_WHAT = 484,
  CROOKED_PENNY = 485,
  DULL_RAZOR = 486,
  POTATO_PEELER = 487,
  METRONOME = 488,
  D_INFINITY = 489,
  EDENS_SOUL = 490,
  ACID_BABY = 491,
  YO_LISTEN = 492,
  ADRENALINE = 493,
  JACOBS_LADDER = 494,
  GHOST_PEPPER = 495,
  EUTHANASIA = 496,
  CAMO_UNDIES = 497,
  DUALITY = 498,
  EUCHARIST = 499,
  SACK_OF_SACKS = 500,
  GREEDS_GULLET = 501,
  LARGE_ZIT = 502,
  LITTLE_HORN = 503,
  BROWN_NUGGET = 504,
  POKE_GO = 505,
  BACKSTABBER = 506,
  SHARP_STRAW = 507,
  MOMS_RAZOR = 508,
  BLOODSHOT_EYE = 509,
  DELIRIOUS = 510,
  ANGRY_FLY = 511,
  BLACK_HOLE = 512,
  BOZO = 513,
  BROKEN_MODEM = 514,
  MYSTERY_GIFT = 515,
  SPRINKLER = 516,
  FAST_BOMBS = 517,
  BUDDY_IN_A_BOX = 518,
  LIL_DELIRIUM = 519,
  JUMPER_CABLES = 520,
  COUPON = 521,
  TELEKINESIS = 522,
  MOVING_BOX = 523,
  TECHNOLOGY_ZERO = 524,
  LEPROSY = 525,
  SEVEN_SEALS = 526,
  MR_ME = 527,
  ANGELIC_PRISM = 528,
  POP = 529,
  DEATHS_LIST = 530,
  HAEMOLACRIA = 531,
  LACHRYPHAGY = 532,
  TRISAGION = 533,
  SCHOOLBAG = 534,
  BLANKET = 535,
  SACRIFICIAL_ALTAR = 536,
  LIL_SPEWER = 537,
  MARBLES = 538,
  MYSTERY_EGG = 539,
  FLAT_STONE = 540,
  MARROW = 541,
  SLIPPED_RIB = 542,
  HALLOWED_GROUND = 543,
  POINTY_RIB = 544,
  BOOK_OF_THE_DEAD = 545,
  DADS_RING = 546,
  DIVORCE_PAPERS = 547,
  JAW_BONE = 548,
  BRITTLE_BONES = 549,
  BROKEN_SHOVEL_1 = 550,
  BROKEN_SHOVEL_2 = 551,
  MOMS_SHOVEL = 552,
  MUCORMYCOSIS = 553,
  TWO_SPOOKY = 554,
  GOLDEN_RAZOR = 555,
  SULFUR = 556,
  FORTUNE_COOKIE = 557,
  EYE_SORE = 558,
  ONE_HUNDRED_TWENTY_VOLT = 559,
  IT_HURTS = 560,
  ALMOND_MILK = 561,
  ROCK_BOTTOM = 562,
  NANCY_BOMBS = 563,
  BAR_OF_SOAP = 564,
  BLOOD_PUPPY = 565,
  DREAM_CATCHER = 566,
  PASCHAL_CANDLE = 567,
  DIVINE_INTERVENTION = 568,
  BLOOD_OATH = 569,
  PLAYDOUGH_COOKIE = 570,
  SOCKS = 571,
  EYE_OF_THE_OCCULT = 572,
  IMMACULATE_HEART = 573,
  MONSTRANCE = 574,
  INTRUDER = 575,
  DIRTY_MIND = 576,
  DAMOCLES = 577,
  FREE_LEMONADE = 578,
  SPIRIT_SWORD = 579,
  RED_KEY = 580,
  PSY_FLY = 581,
  WAVY_CAP = 582,
  ROCKET_IN_A_JAR = 583,
  BOOK_OF_VIRTUES = 584,
  ALABASTER_BOX = 585,
  STAIRWAY = 586,
  SOL = 588,
  LUNA = 589,
  MERCURIUS = 590,
  VENUS = 591,
  TERRA = 592,
  MARS = 593,
  JUPITER = 594,
  SATURNUS = 595,
  URANUS = 596,
  NEPTUNUS = 597,
  PLUTO = 598,
  VOODOO_HEAD = 599,
  EYE_DROPS = 600,
  ACT_OF_CONTRITION = 601,
  MEMBER_CARD = 602,
  BATTERY_PACK = 603,
  MOMS_BRACELET = 604,
  SCOOPER = 605,
  OCULAR_RIFT = 606,
  BOILED_BABY = 607,
  FREEZER_BABY = 608,
  ETERNAL_D6 = 609, // eslint-disable-line isaacscript/enum-member-number-separation
  BIRD_CAGE = 610,
  LARYNX = 611,
  LOST_SOUL = 612,
  BLOOD_BOMBS = 614,
  LIL_DUMPY = 615,
  BIRDS_EYE = 616,
  LODESTONE = 617,
  ROTTEN_TOMATO = 618,
  BIRTHRIGHT = 619,
  RED_STEW = 621,
  GENESIS = 622,
  SHARP_KEY = 623,
  BOOSTER_PACK = 624,
  MEGA_MUSH = 625,
  KNIFE_PIECE_1 = 626,
  KNIFE_PIECE_2 = 627,
  DEATH_CERTIFICATE = 628,
  BOT_FLY = 629,
  MEAT_CLEAVER = 631,
  EVIL_CHARM = 632,
  DOGMA = 633,
  PURGATORY = 634,
  STITCHES = 635,
  R_KEY = 636,
  KNOCKOUT_DROPS = 637,
  ERASER = 638,
  YUCK_HEART = 639,
  URN_OF_SOULS = 640,
  AKELDAMA = 641,
  MAGIC_SKIN = 642,
  REVELATION = 643,
  CONSOLATION_PRIZE = 644,
  TINYTOMA = 645,
  BRIMSTONE_BOMBS = 646,
  FOUR_FIVE_VOLT = 647,
  FRUITY_PLUM = 649,
  PLUM_FLUTE = 650,
  STAR_OF_BETHLEHEM = 651,
  CUBE_BABY = 652,
  VADE_RETRO = 653,
  FALSE_PHD = 654,
  SPIN_TO_WIN = 655,
  DAMOCLES_PASSIVE = 656,
  VASCULITIS = 657,
  GIANT_CELL = 658,
  TROPICAMIDE = 659,
  CARD_READING = 660,
  QUINTS = 661,
  TOOTH_AND_NAIL = 663,
  BINGE_EATER = 664,
  GUPPYS_EYE = 665,
  STRAWMAN = 667,
  DADS_NOTE = 668,
  SAUSAGE = 669,
  OPTIONS = 670,
  CANDY_HEART = 671,
  POUND_OF_FLESH = 672,
  REDEMPTION = 673,
  SPIRIT_SHACKLES = 674,
  CRACKED_ORB = 675,
  EMPTY_HEART = 676,
  ASTRAL_PROJECTION = 677,
  C_SECTION = 678,
  LIL_ABADDON = 679,
  MONTEZUMAS_REVENGE = 680,
  LIL_PORTAL = 681,
  WORM_FRIEND = 682,
  BONE_SPURS = 683,
  HUNGRY_SOUL = 684,
  JAR_OF_WISPS = 685,
  SOUL_LOCKET = 686,
  FRIEND_FINDER = 687,
  INNER_CHILD = 688,
  GLITCHED_CROWN = 689,
  JELLY_BELLY = 690,
  SACRED_ORB = 691,
  SANGUINE_BOND = 692,
  SWARM = 693,
  HEARTBREAK = 694,
  BLOODY_GUST = 695,
  SALVATION = 696,
  VANISHING_TWIN = 697,
  TWISTED_PAIR = 698,
  AZAZELS_RAGE = 699,
  ECHO_CHAMBER = 700,
  ISAACS_TOMB = 701,
  VENGEFUL_SPIRIT = 702,
  ESAU_JR = 703,
  BERSERK = 704,
  DARK_ARTS = 705,
  ABYSS = 706,
  SUPPER = 707,
  STAPLER = 708,
  SUPLEX = 709,
  BAG_OF_CRAFTING = 710,
  FLIP = 711,
  LEMEGETON = 712,
  SUMPTORIUM = 713,
  RECALL = 714,
  HOLD = 715,
  KEEPERS_SACK = 716,
  KEEPERS_KIN = 717,
  KEEPERS_BOX = 719,
  EVERYTHING_JAR = 720,
  TMTRAINER = 721,
  ANIMA_SOLA = 722,
  SPINDOWN_DICE = 723,
  HYPERCOAGULATION = 724,
  IBS = 725,
  HEMOPTYSIS = 726,
  GHOST_BOMBS = 727,
  GELLO = 728,
  DECAP_ATTACK = 729,
  GLASS_EYE = 730,
  STYE = 731,
  MOMS_RING = 732,
}

/**
 * For `EntityType.PICKUP` (5), `PickupVariant.TAROT_CARD` (300).
 *
 * This is the sub-type of a card.
 *
 * This enum was renamed from "Card" to be consistent with the `CollectibleType` and `TrinketType`
 * enums.
 */
export enum CardType {
  /**
   * Spawning cards with this sub-type will produce a random card with the following probabilities:
   *
   * - Random tarot card (1-22) - 66.66%
   * - Specific tarot card (1-22) - 3.03%
   * - Random face card (23-31) - 7.74%
   * - Specific face card (23-31) - 0.86%
   * - Random rune (32-41) - 3.60%
   * - Specific rune (32-41) - 0.36%
   * - Random special card (42-54) - 3.51%
   * - Specific special card (42-54) - 0.27%
   * - Rune shard (55) - 0.00% (never spawns, assuming a fully unlocked save file)
   * - Random reverse tarot card (56-77) - 11.22%
   * - Specific reverse tarot card (56-77) - 0.51%
   * - Cracked Key (78) - 0.27% (same as special card)
   * - Queen of Hearts (79) - 0.86% (same as face card)
   * - Wild Card (80) - 0.27% (same as special card)
   * - Random character rune (81-97) - 5.95%
   * - Specific character rune (81-97) - 0.35%
   */
  NULL = 0,

  FOOL = 1,
  MAGICIAN = 2,
  HIGH_PRIESTESS = 3,
  EMPRESS = 4,
  EMPEROR = 5,
  HIEROPHANT = 6,
  LOVERS = 7,
  CHARIOT = 8,
  JUSTICE = 9,
  HERMIT = 10,
  WHEEL_OF_FORTUNE = 11,
  STRENGTH = 12,
  HANGED_MAN = 13,
  DEATH = 14,
  TEMPERANCE = 15,
  DEVIL = 16,
  TOWER = 17,
  STARS = 18,
  MOON = 19,
  SUN = 20,
  JUDGEMENT = 21,
  WORLD = 22,
  CLUBS_2 = 23,
  DIAMONDS_2 = 24,
  SPADES_2 = 25,
  HEARTS_2 = 26,
  ACE_OF_CLUBS = 27,
  ACE_OF_DIAMONDS = 28,
  ACE_OF_SPADES = 29,
  ACE_OF_HEARTS = 30,
  JOKER = 31,
  RUNE_HAGALAZ = 32,
  RUNE_JERA = 33,
  RUNE_EHWAZ = 34,
  RUNE_DAGAZ = 35,
  RUNE_ANSUZ = 36,
  RUNE_PERTHRO = 37,
  RUNE_BERKANO = 38,
  RUNE_ALGIZ = 39,
  RUNE_BLANK = 40,
  RUNE_BLACK = 41,
  CHAOS = 42,
  CREDIT = 43,
  RULES = 44,
  AGAINST_HUMANITY = 45,
  SUICIDE_KING = 46,
  GET_OUT_OF_JAIL_FREE = 47,
  QUESTION_MARK = 48,
  DICE_SHARD = 49,
  EMERGENCY_CONTACT = 50,
  HOLY = 51,
  HUGE_GROWTH = 52,
  ANCIENT_RECALL = 53,
  ERA_WALK = 54,
  RUNE_SHARD = 55,
  REVERSE_FOOL = 56,
  REVERSE_MAGICIAN = 57,
  REVERSE_HIGH_PRIESTESS = 58,
  REVERSE_EMPRESS = 59,
  REVERSE_EMPEROR = 60,
  REVERSE_HIEROPHANT = 61,
  REVERSE_LOVERS = 62,
  REVERSE_CHARIOT = 63,
  REVERSE_JUSTICE = 64,
  REVERSE_HERMIT = 65,
  REVERSE_WHEEL_OF_FORTUNE = 66,
  REVERSE_STRENGTH = 67,
  REVERSE_HANGED_MAN = 68,
  REVERSE_DEATH = 69,
  REVERSE_TEMPERANCE = 70,
  REVERSE_DEVIL = 71,
  REVERSE_TOWER = 72,
  REVERSE_STARS = 73,
  REVERSE_MOON = 74,
  REVERSE_SUN = 75,
  REVERSE_JUDGEMENT = 76,
  REVERSE_WORLD = 77,
  CRACKED_KEY = 78,
  QUEEN_OF_HEARTS = 79,
  WILD = 80,
  SOUL_ISAAC = 81,
  SOUL_MAGDALENE = 82,
  SOUL_CAIN = 83,
  SOUL_JUDAS = 84,
  SOUL_BLUE_BABY = 85,
  SOUL_EVE = 86,
  SOUL_SAMSON = 87,
  SOUL_AZAZEL = 88,
  SOUL_LAZARUS = 89,
  SOUL_EDEN = 90,
  SOUL_LOST = 91,
  SOUL_LILITH = 92,
  SOUL_KEEPER = 93,
  SOUL_APOLLYON = 94,
  SOUL_FORGOTTEN = 95,
  SOUL_BETHANY = 96,
  SOUL_JACOB = 97,
}

/**
 * For `EntityType.PICKUP` (5), `PickupVariant.TRINKET` (350).
 *
 * This is the sub-type of a trinket.
 */
export enum TrinketType {
  /** Spawning trinkets with this sub-type will produce a random trinket. */
  NULL = 0,

  SWALLOWED_PENNY = 1,
  PETRIFIED_POOP = 2,
  AAA_BATTERY = 3,
  BROKEN_REMOTE = 4,
  PURPLE_HEART = 5,
  BROKEN_MAGNET = 6,
  ROSARY_BEAD = 7,
  CARTRIDGE = 8,
  PULSE_WORM = 9,
  WIGGLE_WORM = 10,
  RING_WORM = 11,
  FLAT_WORM = 12,
  STORE_CREDIT = 13,
  CALLUS = 14,
  LUCKY_ROCK = 15,
  MOMS_TOENAIL = 16,
  BLACK_LIPSTICK = 17,
  BIBLE_TRACT = 18,
  PAPER_CLIP = 19,
  MONKEY_PAW = 20,
  MYSTERIOUS_PAPER = 21,
  DAEMONS_TAIL = 22,
  MISSING_POSTER = 23,
  BUTT_PENNY = 24,
  MYSTERIOUS_CANDY = 25,
  HOOK_WORM = 26,
  WHIP_WORM = 27,
  BROKEN_ANKH = 28,
  FISH_HEAD = 29,
  PINKY_EYE = 30,
  PUSH_PIN = 31,
  LIBERTY_CAP = 32,
  UMBILICAL_CORD = 33,
  CHILDS_HEART = 34,
  CURVED_HORN = 35,
  RUSTED_KEY = 36,
  GOAT_HOOF = 37,
  MOMS_PEARL = 38,
  CANCER = 39,
  RED_PATCH = 40,
  MATCH_STICK = 41,
  LUCKY_TOE = 42,
  CURSED_SKULL = 43,
  SAFETY_CAP = 44,
  ACE_SPADES = 45,
  ISAACS_FORK = 46,
  // 47 is `POLAROID_OBSOLETE`.
  MISSING_PAGE = 48,
  BLOODY_PENNY = 49,
  BURNT_PENNY = 50,
  FLAT_PENNY = 51,
  COUNTERFEIT_PENNY = 52,
  TICK = 53,
  ISAACS_HEAD = 54,
  MAGGYS_FAITH = 55,
  JUDAS_TONGUE = 56,
  SOUL = 57,
  SAMSONS_LOCK = 58,
  CAINS_EYE = 59,
  EVES_BIRD_FOOT = 60,
  LEFT_HAND = 61,
  SHINY_ROCK = 62,
  SAFETY_SCISSORS = 63,
  RAINBOW_WORM = 64,
  TAPE_WORM = 65,
  LAZY_WORM = 66,
  CRACKED_DICE = 67,
  SUPER_MAGNET = 68,
  FADED_POLAROID = 69,
  LOUSE = 70,
  BOBS_BLADDER = 71,
  WATCH_BATTERY = 72,
  BLASTING_CAP = 73,
  STUD_FINDER = 74,
  ERROR = 75,
  POKER_CHIP = 76,
  BLISTER = 77,
  SECOND_HAND = 78,
  ENDLESS_NAMELESS = 79,
  BLACK_FEATHER = 80,
  BLIND_RAGE = 81,
  GOLDEN_HORSE_SHOE = 82,
  STORE_KEY = 83,
  RIB_OF_GREED = 84,
  KARMA = 85,
  LIL_LARVA = 86,
  MOMS_LOCKET = 87,
  NO = 88,
  CHILD_LEASH = 89,
  BROWN_CAP = 90,
  MECONIUM = 91,
  CRACKED_CROWN = 92,
  USED_DIAPER = 93,
  FISH_TAIL = 94,
  BLACK_TOOTH = 95,
  OUROBOROS_WORM = 96,
  TONSIL = 97,
  NOSE_GOBLIN = 98,
  SUPER_BALL = 99,
  VIBRANT_BULB = 100,
  DIM_BULB = 101,
  FRAGMENTED_CARD = 102,
  EQUALITY = 103,
  WISH_BONE = 104,
  BAG_LUNCH = 105,
  LOST_CORK = 106,
  CROW_HEART = 107,
  WALNUT = 108,
  DUCT_TAPE = 109,
  SILVER_DOLLAR = 110,
  BLOODY_CROWN = 111,
  PAY_TO_WIN = 112,
  LOCUST_OF_WRATH = 113,
  LOCUST_OF_PESTILENCE = 114,
  LOCUST_OF_FAMINE = 115,
  LOCUST_OF_DEATH = 116,
  LOCUST_OF_CONQUEST = 117,
  BAT_WING = 118,
  STEM_CELL = 119,
  HAIRPIN = 120,
  WOODEN_CROSS = 121,
  BUTTER = 122,
  FILIGREE_FEATHERS = 123,
  DOOR_STOP = 124,
  EXTENSION_CORD = 125,
  ROTTEN_PENNY = 126,
  BABY_BENDER = 127,
  FINGER_BONE = 128,
  JAW_BREAKER = 129,
  CHEWED_PEN = 130,
  BLESSED_PENNY = 131,
  BROKEN_SYRINGE = 132,
  SHORT_FUSE = 133,
  GIGANTE_BEAN = 134,
  LIGHTER = 135,
  BROKEN_PADLOCK = 136,
  MYOSOTIS = 137,
  M = 138,
  TEARDROP_CHARM = 139,
  APPLE_OF_SODOM = 140,
  FORGOTTEN_LULLABY = 141,
  BETHS_FAITH = 142,
  OLD_CAPACITOR = 143,
  BRAIN_WORM = 144,
  PERFECTION = 145,
  DEVILS_CROWN = 146,
  CHARGED_PENNY = 147,
  FRIENDSHIP_NECKLACE = 148,
  PANIC_BUTTON = 149,
  BLUE_KEY = 150,
  FLAT_FILE = 151,
  TELESCOPE_LENS = 152,
  MOMS_LOCK = 153,
  DICE_BAG = 154,
  HOLY_CROWN = 155,
  MOTHERS_KISS = 156,
  TORN_CARD = 157,
  TORN_POCKET = 158,
  GILDED_KEY = 159,
  LUCKY_SACK = 160,
  WICKED_CROWN = 161,
  AZAZELS_STUMP = 162,
  DINGLE_BERRY = 163,
  RING_CAP = 164,
  NUH_UH = 165,
  MODELING_CLAY = 166,
  POLISHED_BONE = 167,
  HOLLOW_HEART = 168,
  KIDS_DRAWING = 169,
  CRYSTAL_KEY = 170,
  KEEPERS_BARGAIN = 171,
  CURSED_PENNY = 172,
  YOUR_SOUL = 173,
  NUMBER_MAGNET = 174,
  STRANGE_KEY = 175,
  LIL_CLOT = 176,
  TEMPORARY_TATTOO = 177,
  SWALLOWED_M80 = 178, // eslint-disable-line isaacscript/enum-member-number-separation
  RC_REMOTE = 179,
  FOUND_SOUL = 180,
  EXPANSION_PACK = 181,
  BETHS_ESSENCE = 182,
  TWINS = 183,
  ADOPTION_PAPERS = 184,
  CRICKET_LEG = 185,
  APOLLYONS_BEST_FRIEND = 186,
  BROKEN_GLASSES = 187,
  ICE_CUBE = 188,
  SIGIL_OF_BAPHOMET = 189,
}

/** For `EntityType.PICKUP` (5), `PickupVariant.BED` (380). */
export enum BedSubType {
  ISAAC = 0,
  MOM = 1,
}

/** For `EntityType.LASER` (7). */
export enum LaserSubType {
  /** A typical laser that has a start and end point. */
  LINEAR = 0,

  /** A controlled ring laser (e.g. Tech + Ludovico, Brim + Ludovico). */
  RING_LUDOVICO = 1,

  /** A ring laser that travels like a projectile (e.g. Tech X). */
  RING_PROJECTILE = 2,

  /** A ring laser that encircle their parents (e.g. Maw of the Void). */
  RING_FOLLOW_PARENT = 3,

  /** For Technology Zero; doesn't create an impact. */
  NO_IMPACT = 4,
}

/** For `EntityType.CHARGER` (23), `ChargerVariant.CHARGER` (0). */
export enum ChargerSubType {
  CHARGER = 0,
  MY_SHADOW = 1,
}

/**
 * For `EntityType.CONSTANT_STONE_SHOOTER` (202),
 * `ConstantStoneShooterVariant.CONSTANT_STONE_SHOOTER` (0).
 *
 * This is the same as the `Direction` enum.
 */
export enum ConstantStoneShooterSubType {
  LEFT = 0,
  UP = 1,
  RIGHT = 2,
  DOWN = 3,
}

/** For `EntityType.MOTHER` (912), `MotherVariant.MOTHER_1` (0). */
export enum MotherSubType {
  PHASE_1 = 0,
  PHASE_2 = 1,
}

/** For `EntityType.EFFECT` (1000), `EffectVariant.BLOOD_EXPLOSION` (2). */
export enum BloodExplosionSubType {
  MEDIUM_WITH_LEFTOVER_BLOOD = 0,
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
  GIANT = 4,
  SWIRL = 5,
}

/** For `EntityType.EFFECT` (1000), `EffectVariant.POOF_1` (15). */
export enum PoofSubType {
  NORMAL = 0,
  SMALL = 1,

  // A sub-type of 2 appears to be the same thing as a sub-type of 0.

  LARGE = 3,
}

/** For `EntityType.EFFECT` (1000), `EffectVariant.HEAVEN_LIGHT_DOOR` (39). */
export enum HeavenLightDoorSubType {
  HEAVEN_DOOR = 0,
  MOONLIGHT = 1,
}

/** For `EntityType.EFFECT` (1000), `EffectVariant.DICE_FLOOR` (76). */
export enum DiceFloorSubType {
  /** Has the same effect as using a D4. */
  ONE_PIP = 0,

  /** Has the same effect as using a D20. */
  TWO_PIP = 1,

  /**
   * Rerolls all pickups and trinkets on the floor, including items inside of a shop, excluding
   * collectibles.
   */
  THREE_PIP = 2,

  /** Rerolls all collectibles on the floor. */
  FOUR_PIP = 3,

  /** Has the same effect as using a Forget Me Now. */
  FIVE_PIP = 4,

  /** Has the combined effect of a 1-pip, 3-pip and 4-pip dice room. */
  SIX_PIP = 5,
}

/** For `EntityType.EFFECT` (1000), `EffectVariant.TALL_LADDER` (156). */
export enum TallLadderSubType {
  TALL_LADDER = 0,
  STAIRWAY = 1,
}

/** For `EntityType.EFFECT` (1000), `EffectVariant.PURGATORY` (189). */
export enum PurgatorySubType {
  RIFT = 0,
  GHOST = 1,
}
