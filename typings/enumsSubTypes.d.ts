// Enums from the "resources/scripts/enums.lua" file
// (entity subtypes only)

/** For EntityType.ENTITY_PLAYER (1), PlayerVariant.PLAYER (0) */
declare enum PlayerType {
  PLAYER_POSSESSOR = -1,

  PLAYER_ISAAC = 0,
  PLAYER_MAGDALENE = 1,
  PLAYER_CAIN = 2,
  PLAYER_JUDAS = 3,
  PLAYER_BLUEBABY = 4,
  PLAYER_EVE = 5,
  PLAYER_SAMSON = 6,
  PLAYER_AZAZEL = 7,
  PLAYER_LAZARUS = 8,
  PLAYER_EDEN = 9,
  PLAYER_THELOST = 10,
  PLAYER_LAZARUS2 = 11,
  PLAYER_BLACKJUDAS = 12,
  PLAYER_LILITH = 13,
  PLAYER_KEEPER = 14,
  PLAYER_APOLLYON = 15,
  PLAYER_THEFORGOTTEN = 16,
  PLAYER_THESOUL = 17,
  PLAYER_BETHANY = 18,
  PLAYER_JACOB = 19,
  PLAYER_ESAU = 20,
  PLAYER_ISAAC_B = 21,
  PLAYER_MAGDALENE_B = 22,
  PLAYER_CAIN_B = 23,
  PLAYER_JUDAS_B = 24,
  PLAYER_BLUEBABY_B = 25,
  PLAYER_EVE_B = 26,
  PLAYER_SAMSON_B = 27,
  PLAYER_AZAZEL_B = 28,
  PLAYER_LAZARUS_B = 29,
  PLAYER_EDEN_B = 30,
  PLAYER_THELOST_B = 31,
  PLAYER_LILITH_B = 32,
  PLAYER_KEEPER_B = 33,
  PLAYER_APOLLYON_B = 34,
  PLAYER_THEFORGOTTEN_B = 35,
  PLAYER_BETHANY_B = 36,
  PLAYER_JACOB_B = 37,
  PLAYER_LAZARUS2_B = 38,
  PLAYER_JACOB2_B = 39,
  PLAYER_THESOUL_B = 40,
  NUM_PLAYER_TYPES = 41,
}

/** For EntityType.ENTITY_PLAYER (1), PlayerVariant.COOP_BABY (1) */
declare enum BabySubType {
  BABY_UNASSIGNED = -1,
  BABY_SPIDER = 0,
  BABY_LOVE = 1,
  BABY_BLOAT = 2,
  BABY_WATER = 3,
  BABY_PSY = 4,
  BABY_CURSED = 5,
  BABY_TROLL = 6,
  BABY_YBAB = 7,
  BABY_COCKEYED = 8,
  BABY_HOST = 9,
  BABY_LOST = 10,
  BABY_CUTE = 11,
  BABY_CROW = 12,
  BABY_SHADOW = 13,
  BABY_GLASS = 14,
  BABY_GOLD = 15,
  BABY_CY = 16,
  BABY_BEAN = 17,
  BABY_MAG = 18,
  BABY_WRATH = 19,
  BABY_WRAPPED = 20,
  BABY_BEGOTTEN = 21,
  BABY_DEAD = 22,
  BABY_FIGHTING = 23,
  BABY_0 = 24,
  BABY_GLITCH = 25,
  BABY_MAGNET = 26,
  BABY_BLACK = 27,
  BABY_RED = 28,
  BABY_WHITE = 29,
  BABY_BLUE = 30,
  BABY_RAGE = 31,
  BABY_CRY = 32,
  BABY_YELLOW = 33,
  BABY_LONG = 34,
  BABY_GREEN = 35,
  BABY_LIL = 36,
  BABY_BIG = 37,
  BABY_BROWN = 38,
  BABY_NOOSE = 39,
  BABY_HIVE = 40,
  BABY_BUDDY = 41,
  BABY_COLORFUL = 42,
  BABY_WHORE = 43,
  BABY_CRACKED = 44,
  BABY_DRIPPING = 45,
  BABY_BLINDING = 46,
  BABY_SUCKY = 47,
  BABY_DARK = 48,
  BABY_PICKY = 49,
  BABY_REVENGE = 50,
  BABY_BELIAL = 51,
  BABY_SALE = 52,
  BABY_GOAT = 53,
  BABY_SUPER_GREED = 54,
  BABY_MORT = 55,
  BABY_APOLLYON = 56,
  BABY_BONE = 57,
  BABY_BOUND = 58,
  BABY_FOUND_SOUL = 59,
  BABY_LOST_WHITE = 60,
  BABY_LOST_BLACK = 61,
  BABY_LOST_BLUE = 62,
  BABY_LOST_GREY = 63,
  BABY_WISP = 64,
  BABY_DOUBLE = 65,
  BABY_GLOWING = 66,
  BABY_ILLUSION = 67,
  BABY_HOPE = 68,
  BABY_SOLOMON_A = 69,
  BABY_SOLOMON_B = 70,
  BABY_BASIC = 71,
}

/** For EntityType.ENTITY_FAMILIAR (3), FamiliarVariant.BLUE_FLY (43) */
declare enum LocustSubtypes {
  /** Red (explosive) */
  LOCUST_OF_WRATH = 1,
  /** Green (poison) */
  LOCUST_OF_PESTILENCE = 2,
  /** Yellow (slowing) */
  LOCUST_OF_FAMINE = 3,
  /** Black (double-damage) */
  LOCUST_OF_DEATH = 4,
  /** White */
  LOCUST_OF_CONQUEST = 5,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_HEART (10) */
declare enum HeartSubType {
  HEART_FULL = 1,
  HEART_HALF = 2,
  HEART_SOUL = 3,
  HEART_ETERNAL = 4,
  HEART_DOUBLEPACK = 5,
  HEART_BLACK = 6,
  HEART_GOLDEN = 7,
  HEART_HALF_SOUL = 8,
  HEART_SCARED = 9,
  HEART_BLENDED = 10,
  HEART_BONE = 11,
  HEART_ROTTEN = 12,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_COIN (20) */
declare enum CoinSubType {
  COIN_PENNY = 1,
  COIN_NICKEL = 2,
  COIN_DIME = 3,
  COIN_DOUBLEPACK = 4,
  COIN_LUCKYPENNY = 5,
  COIN_STICKYNICKEL = 6,
  COIN_GOLDEN = 7,
}

/** EntityType.ENTITY_PICKUP (5), For PickupVariant.PICKUP_KEY (30) */
declare enum KeySubType {
  KEY_NORMAL = 1,
  KEY_GOLDEN = 2,
  KEY_DOUBLEPACK = 3,
  KEY_CHARGED = 4,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_BOMB (40) */
declare enum BombSubType {
  BOMB_NORMAL = 1,
  BOMB_DOUBLEPACK = 2,
  BOMB_TROLL = 3,
  BOMB_GOLDEN = 4,
  BOMB_SUPERTROLL = 5,
  BOMB_GOLDENTROLL = 6,
  BOMB_GIGA = 7,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_POOP (42) */
declare enum PoopPickupSubType {
  POOP_SMALL = 0,
  POOP_BIG = 1,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_CHEST (50) */
declare enum ChestSubType {
  CHEST_OPENED = 0,
  CHEST_CLOSED = 1,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_GRAB_BAG (69) */
declare enum SackSubType {
  SACK_NORMAL = 1,
  SACK_BLACK = 2,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_LIL_BATTERY (90) */
declare enum BatterySubType {
  BATTERY_NORMAL = 1,
  BATTERY_MICRO = 2,
  BATTERY_MEGA = 3,
  BATTERY_GOLDEN = 4,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_COLLECTIBLE (100) */
declare enum CollectibleType {
  COLLECTIBLE_NULL = 0,
  COLLECTIBLE_SAD_ONION = 1,
  COLLECTIBLE_INNER_EYE = 2,
  COLLECTIBLE_SPOON_BENDER = 3,
  COLLECTIBLE_CRICKETS_HEAD = 4,
  COLLECTIBLE_MY_REFLECTION = 5,
  COLLECTIBLE_NUMBER_ONE = 6,
  COLLECTIBLE_BLOOD_OF_THE_MARTYR = 7,
  COLLECTIBLE_BROTHER_BOBBY = 8,
  COLLECTIBLE_SKATOLE = 9,
  COLLECTIBLE_HALO_OF_FLIES = 10,
  COLLECTIBLE_1UP = 11,
  COLLECTIBLE_MAGIC_MUSHROOM = 12,
  COLLECTIBLE_VIRUS = 13,
  COLLECTIBLE_ROID_RAGE = 14,
  COLLECTIBLE_HEART = 15,
  COLLECTIBLE_RAW_LIVER = 16,
  COLLECTIBLE_SKELETON_KEY = 17,
  COLLECTIBLE_DOLLAR = 18,
  COLLECTIBLE_BOOM = 19,
  COLLECTIBLE_TRANSCENDENCE = 20,
  COLLECTIBLE_COMPASS = 21,
  COLLECTIBLE_LUNCH = 22,
  COLLECTIBLE_DINNER = 23,
  COLLECTIBLE_DESSERT = 24,
  COLLECTIBLE_BREAKFAST = 25,
  COLLECTIBLE_ROTTEN_MEAT = 26,
  COLLECTIBLE_WOODEN_SPOON = 27,
  COLLECTIBLE_BELT = 28,
  COLLECTIBLE_MOMS_UNDERWEAR = 29,
  COLLECTIBLE_MOMS_HEELS = 30,
  COLLECTIBLE_MOMS_LIPSTICK = 31,
  COLLECTIBLE_WIRE_COAT_HANGER = 32,
  COLLECTIBLE_BIBLE = 33,
  COLLECTIBLE_BOOK_OF_BELIAL = 34,
  COLLECTIBLE_NECRONOMICON = 35,
  COLLECTIBLE_POOP = 36,
  COLLECTIBLE_MR_BOOM = 37,
  COLLECTIBLE_TAMMYS_HEAD = 38,
  COLLECTIBLE_MOMS_BRA = 39,
  COLLECTIBLE_KAMIKAZE = 40,
  COLLECTIBLE_MOMS_PAD = 41,
  COLLECTIBLE_BOBS_ROTTEN_HEAD = 42,
  COLLECTIBLE_TELEPORT = 44,
  COLLECTIBLE_YUM_HEART = 45,
  COLLECTIBLE_LUCKY_FOOT = 46,
  COLLECTIBLE_DOCTORS_REMOTE = 47,
  COLLECTIBLE_CUPIDS_ARROW = 48,
  COLLECTIBLE_SHOOP_DA_WHOOP = 49,
  COLLECTIBLE_STEVEN = 50,
  COLLECTIBLE_PENTAGRAM = 51,
  COLLECTIBLE_DR_FETUS = 52,
  COLLECTIBLE_MAGNETO = 53,
  COLLECTIBLE_TREASURE_MAP = 54,
  COLLECTIBLE_MOMS_EYE = 55,
  COLLECTIBLE_LEMON_MISHAP = 56,
  COLLECTIBLE_DISTANT_ADMIRATION = 57,
  COLLECTIBLE_BOOK_OF_SHADOWS = 58,
  COLLECTIBLE_LADDER = 60,
  COLLECTIBLE_CHARM_VAMPIRE = 62,
  COLLECTIBLE_BATTERY = 63,
  COLLECTIBLE_STEAM_SALE = 64,
  COLLECTIBLE_ANARCHIST_COOKBOOK = 65,
  COLLECTIBLE_HOURGLASS = 66,
  COLLECTIBLE_SISTER_MAGGY = 67,
  COLLECTIBLE_TECHNOLOGY = 68,
  COLLECTIBLE_CHOCOLATE_MILK = 69,
  COLLECTIBLE_GROWTH_HORMONES = 70,
  COLLECTIBLE_MINI_MUSH = 71,
  COLLECTIBLE_ROSARY = 72,
  COLLECTIBLE_CUBE_OF_MEAT = 73,
  COLLECTIBLE_QUARTER = 74,
  COLLECTIBLE_PHD = 75,
  COLLECTIBLE_XRAY_VISION = 76,
  COLLECTIBLE_MY_LITTLE_UNICORN = 77,
  COLLECTIBLE_BOOK_OF_REVELATIONS = 78,
  COLLECTIBLE_MARK = 79,
  COLLECTIBLE_PACT = 80,
  COLLECTIBLE_DEAD_CAT = 81,
  COLLECTIBLE_LORD_OF_THE_PIT = 82,
  COLLECTIBLE_THE_NAIL = 83,
  COLLECTIBLE_WE_NEED_TO_GO_DEEPER = 84,
  COLLECTIBLE_DECK_OF_CARDS = 85,
  COLLECTIBLE_MONSTROS_TOOTH = 86,
  COLLECTIBLE_LOKIS_HORNS = 87,
  COLLECTIBLE_LITTLE_CHUBBY = 88,
  COLLECTIBLE_SPIDER_BITE = 89,
  COLLECTIBLE_SMALL_ROCK = 90,
  COLLECTIBLE_SPELUNKER_HAT = 91,
  COLLECTIBLE_SUPER_BANDAGE = 92,
  COLLECTIBLE_GAMEKID = 93,
  COLLECTIBLE_SACK_OF_PENNIES = 94,
  COLLECTIBLE_ROBO_BABY = 95,
  COLLECTIBLE_LITTLE_CHAD = 96,
  COLLECTIBLE_BOOK_OF_SIN = 97,
  COLLECTIBLE_RELIC = 98,
  COLLECTIBLE_LITTLE_GISH = 99,
  COLLECTIBLE_LITTLE_STEVEN = 100,
  COLLECTIBLE_HALO = 101,
  COLLECTIBLE_MOMS_BOTTLE_OF_PILLS = 102,
  COLLECTIBLE_COMMON_COLD = 103,
  COLLECTIBLE_PARASITE = 104,
  COLLECTIBLE_D6 = 105,
  COLLECTIBLE_MR_MEGA = 106,
  COLLECTIBLE_PINKING_SHEARS = 107,
  COLLECTIBLE_WAFER = 108,
  COLLECTIBLE_MONEY_EQUALS_POWER = 109,
  COLLECTIBLE_MOMS_CONTACTS = 110,
  COLLECTIBLE_BEAN = 111,
  COLLECTIBLE_GUARDIAN_ANGEL = 112,
  COLLECTIBLE_DEMON_BABY = 113,
  COLLECTIBLE_MOMS_KNIFE = 114,
  COLLECTIBLE_OUIJA_BOARD = 115,
  COLLECTIBLE_9_VOLT = 116,
  COLLECTIBLE_DEAD_BIRD = 117,
  COLLECTIBLE_BRIMSTONE = 118,
  COLLECTIBLE_BLOOD_BAG = 119,
  COLLECTIBLE_ODD_MUSHROOM_THIN = 120,
  COLLECTIBLE_ODD_MUSHROOM_LARGE = 121,
  COLLECTIBLE_WHORE_OF_BABYLON = 122,
  COLLECTIBLE_MONSTER_MANUAL = 123,
  COLLECTIBLE_DEAD_SEA_SCROLLS = 124,
  COLLECTIBLE_BOBBY_BOMB = 125,
  COLLECTIBLE_RAZOR_BLADE = 126,
  COLLECTIBLE_FORGET_ME_NOW = 127,
  COLLECTIBLE_FOREVER_ALONE = 128,
  COLLECTIBLE_BUCKET_OF_LARD = 129,
  COLLECTIBLE_PONY = 130,
  COLLECTIBLE_BOMB_BAG = 131,
  COLLECTIBLE_LUMP_OF_COAL = 132,
  COLLECTIBLE_GUPPYS_PAW = 133,
  COLLECTIBLE_GUPPYS_TAIL = 134,
  COLLECTIBLE_IV_BAG = 135,
  COLLECTIBLE_BEST_FRIEND = 136,
  COLLECTIBLE_REMOTE_DETONATOR = 137,
  COLLECTIBLE_STIGMATA = 138,
  COLLECTIBLE_MOMS_PURSE = 139,
  COLLECTIBLE_BOBS_CURSE = 140,
  COLLECTIBLE_PAGEANT_BOY = 141,
  COLLECTIBLE_SCAPULAR = 142,
  COLLECTIBLE_SPEED_BALL = 143,
  COLLECTIBLE_BUM_FRIEND = 144,
  COLLECTIBLE_GUPPYS_HEAD = 145,
  COLLECTIBLE_PRAYER_CARD = 146,
  COLLECTIBLE_NOTCHED_AXE = 147,
  COLLECTIBLE_INFESTATION = 148,
  COLLECTIBLE_IPECAC = 149,
  COLLECTIBLE_TOUGH_LOVE = 150,
  COLLECTIBLE_MULLIGAN = 151,
  COLLECTIBLE_TECHNOLOGY_2 = 152,
  COLLECTIBLE_MUTANT_SPIDER = 153,
  COLLECTIBLE_CHEMICAL_PEEL = 154,
  COLLECTIBLE_PEEPER = 155,
  COLLECTIBLE_HABIT = 156,
  COLLECTIBLE_BLOODY_LUST = 157,
  COLLECTIBLE_CRYSTAL_BALL = 158,
  COLLECTIBLE_SPIRIT_OF_THE_NIGHT = 159,
  COLLECTIBLE_CRACK_THE_SKY = 160,
  COLLECTIBLE_ANKH = 161,
  COLLECTIBLE_CELTIC_CROSS = 162,
  COLLECTIBLE_GHOST_BABY = 163,
  COLLECTIBLE_CANDLE = 164,
  COLLECTIBLE_CAT_O_NINE_TAILS = 165,
  COLLECTIBLE_D20 = 166,
  COLLECTIBLE_HARLEQUIN_BABY = 167,
  COLLECTIBLE_EPIC_FETUS = 168,
  COLLECTIBLE_POLYPHEMUS = 169,
  COLLECTIBLE_DADDY_LONGLEGS = 170,
  COLLECTIBLE_SPIDER_BUTT = 171,
  COLLECTIBLE_SACRIFICIAL_DAGGER = 172,
  COLLECTIBLE_MITRE = 173,
  COLLECTIBLE_RAINBOW_BABY = 174,
  COLLECTIBLE_DADS_KEY = 175,
  COLLECTIBLE_STEM_CELLS = 176,
  COLLECTIBLE_PORTABLE_SLOT = 177,
  COLLECTIBLE_HOLY_WATER = 178,
  COLLECTIBLE_FATE = 179,
  COLLECTIBLE_BLACK_BEAN = 180,
  COLLECTIBLE_WHITE_PONY = 181,
  COLLECTIBLE_SACRED_HEART = 182,
  COLLECTIBLE_TOOTH_PICKS = 183,
  COLLECTIBLE_HOLY_GRAIL = 184,
  COLLECTIBLE_DEAD_DOVE = 185,
  COLLECTIBLE_BLOOD_RIGHTS = 186,
  COLLECTIBLE_GUPPYS_HAIRBALL = 187,
  COLLECTIBLE_ABEL = 188,
  COLLECTIBLE_SMB_SUPER_FAN = 189,
  COLLECTIBLE_PYRO = 190,
  COLLECTIBLE_3_DOLLAR_BILL = 191,
  COLLECTIBLE_TELEPATHY_BOOK = 192,
  COLLECTIBLE_MEAT = 193,
  COLLECTIBLE_MAGIC_8_BALL = 194,
  COLLECTIBLE_MOMS_COIN_PURSE = 195,
  COLLECTIBLE_SQUEEZY = 196,
  COLLECTIBLE_JESUS_JUICE = 197,
  COLLECTIBLE_BOX = 198,
  COLLECTIBLE_MOMS_KEY = 199,
  COLLECTIBLE_MOMS_EYESHADOW = 200,
  COLLECTIBLE_IRON_BAR = 201,
  COLLECTIBLE_MIDAS_TOUCH = 202,
  COLLECTIBLE_HUMBLEING_BUNDLE = 203,
  COLLECTIBLE_FANNY_PACK = 204,
  COLLECTIBLE_SHARP_PLUG = 205,
  COLLECTIBLE_GUILLOTINE = 206,
  COLLECTIBLE_BALL_OF_BANDAGES = 207,
  COLLECTIBLE_CHAMPION_BELT = 208,
  COLLECTIBLE_BUTT_BOMBS = 209,
  COLLECTIBLE_GNAWED_LEAF = 210,
  COLLECTIBLE_SPIDERBABY = 211,
  COLLECTIBLE_GUPPYS_COLLAR = 212,
  COLLECTIBLE_LOST_CONTACT = 213,
  COLLECTIBLE_ANEMIC = 214,
  COLLECTIBLE_GOAT_HEAD = 215,
  COLLECTIBLE_CEREMONIAL_ROBES = 216,
  COLLECTIBLE_MOMS_WIG = 217,
  COLLECTIBLE_PLACENTA = 218,
  COLLECTIBLE_OLD_BANDAGE = 219,
  COLLECTIBLE_SAD_BOMBS = 220,
  COLLECTIBLE_RUBBER_CEMENT = 221,
  COLLECTIBLE_ANTI_GRAVITY = 222,
  COLLECTIBLE_PYROMANIAC = 223,
  COLLECTIBLE_CRICKETS_BODY = 224,
  COLLECTIBLE_GIMPY = 225,
  COLLECTIBLE_BLACK_LOTUS = 226,
  COLLECTIBLE_PIGGY_BANK = 227,
  COLLECTIBLE_MOMS_PERFUME = 228,
  COLLECTIBLE_MONSTROS_LUNG = 229,
  COLLECTIBLE_ABADDON = 230,
  COLLECTIBLE_BALL_OF_TAR = 231,
  COLLECTIBLE_STOP_WATCH = 232,
  COLLECTIBLE_TINY_PLANET = 233,
  COLLECTIBLE_INFESTATION_2 = 234,
  COLLECTIBLE_E_COLI = 236,
  COLLECTIBLE_DEATHS_TOUCH = 237,
  COLLECTIBLE_KEY_PIECE_1 = 238,
  COLLECTIBLE_KEY_PIECE_2 = 239,
  COLLECTIBLE_EXPERIMENTAL_TREATMENT = 240,
  COLLECTIBLE_CONTRACT_FROM_BELOW = 241,
  COLLECTIBLE_INFAMY = 242,
  COLLECTIBLE_TRINITY_SHIELD = 243,
  COLLECTIBLE_TECH_5 = 244,
  COLLECTIBLE_20_20 = 245,
  COLLECTIBLE_BLUE_MAP = 246,
  COLLECTIBLE_BFFS = 247,
  COLLECTIBLE_HIVE_MIND = 248,
  COLLECTIBLE_THERES_OPTIONS = 249,
  COLLECTIBLE_BOGO_BOMBS = 250,
  COLLECTIBLE_STARTER_DECK = 251,
  COLLECTIBLE_LITTLE_BAGGY = 252,
  COLLECTIBLE_MAGIC_SCAB = 253,
  COLLECTIBLE_BLOOD_CLOT = 254,
  COLLECTIBLE_SCREW = 255,
  COLLECTIBLE_HOT_BOMBS = 256,
  COLLECTIBLE_FIRE_MIND = 257,
  COLLECTIBLE_MISSING_NO = 258,
  COLLECTIBLE_DARK_MATTER = 259,
  COLLECTIBLE_BLACK_CANDLE = 260,
  COLLECTIBLE_PROPTOSIS = 261,
  COLLECTIBLE_MISSING_PAGE_2 = 262,
  COLLECTIBLE_CLEAR_RUNE = 263,
  COLLECTIBLE_SMART_FLY = 264,
  COLLECTIBLE_DRY_BABY = 265,
  COLLECTIBLE_JUICY_SACK = 266,
  COLLECTIBLE_ROBO_BABY_2 = 267,
  COLLECTIBLE_ROTTEN_BABY = 268,
  COLLECTIBLE_HEADLESS_BABY = 269,
  COLLECTIBLE_LEECH = 270,
  COLLECTIBLE_MYSTERY_SACK = 271,
  COLLECTIBLE_BBF = 272,
  COLLECTIBLE_BOBS_BRAIN = 273,
  COLLECTIBLE_BEST_BUD = 274,
  COLLECTIBLE_LIL_BRIMSTONE = 275,
  COLLECTIBLE_ISAACS_HEART = 276,
  COLLECTIBLE_LIL_HAUNT = 277,
  COLLECTIBLE_DARK_BUM = 278,
  COLLECTIBLE_BIG_FAN = 279,
  COLLECTIBLE_SISSY_LONGLEGS = 280,
  COLLECTIBLE_PUNCHING_BAG = 281,
  COLLECTIBLE_HOW_TO_JUMP = 282,
  COLLECTIBLE_D100 = 283,
  COLLECTIBLE_D4 = 284,
  COLLECTIBLE_D10 = 285,
  COLLECTIBLE_BLANK_CARD = 286,
  COLLECTIBLE_BOOK_OF_SECRETS = 287,
  COLLECTIBLE_BOX_OF_SPIDERS = 288,
  COLLECTIBLE_RED_CANDLE = 289,
  COLLECTIBLE_THE_JAR = 290,
  COLLECTIBLE_FLUSH = 291,
  COLLECTIBLE_SATANIC_BIBLE = 292,
  COLLECTIBLE_HEAD_OF_KRAMPUS = 293,
  COLLECTIBLE_BUTTER_BEAN = 294,
  COLLECTIBLE_MAGIC_FINGERS = 295,
  COLLECTIBLE_CONVERTER = 296,
  COLLECTIBLE_BLUE_BOX = 297,
  COLLECTIBLE_UNICORN_STUMP = 298,
  COLLECTIBLE_TAURUS = 299,
  COLLECTIBLE_ARIES = 300,
  COLLECTIBLE_CANCER = 301,
  COLLECTIBLE_LEO = 302,
  COLLECTIBLE_VIRGO = 303,
  COLLECTIBLE_LIBRA = 304,
  COLLECTIBLE_SCORPIO = 305,
  COLLECTIBLE_SAGITTARIUS = 306,
  COLLECTIBLE_CAPRICORN = 307,
  COLLECTIBLE_AQUARIUS = 308,
  COLLECTIBLE_PISCES = 309,
  COLLECTIBLE_EVES_MASCARA = 310,
  COLLECTIBLE_JUDAS_SHADOW = 311,
  COLLECTIBLE_MAGGYS_BOW = 312,
  COLLECTIBLE_HOLY_MANTLE = 313,
  COLLECTIBLE_THUNDER_THIGHS = 314,
  COLLECTIBLE_STRANGE_ATTRACTOR = 315,
  COLLECTIBLE_CURSED_EYE = 316,
  COLLECTIBLE_MYSTERIOUS_LIQUID = 317,
  COLLECTIBLE_GEMINI = 318,
  COLLECTIBLE_CAINS_OTHER_EYE = 319,
  COLLECTIBLE_BLUE_BABYS_ONLY_FRIEND = 320,
  COLLECTIBLE_SAMSONS_CHAINS = 321,
  COLLECTIBLE_MONGO_BABY = 322,
  COLLECTIBLE_ISAACS_TEARS = 323,
  COLLECTIBLE_UNDEFINED = 324,
  COLLECTIBLE_SCISSORS = 325,
  COLLECTIBLE_BREATH_OF_LIFE = 326,
  COLLECTIBLE_POLAROID = 327,
  COLLECTIBLE_NEGATIVE = 328,
  COLLECTIBLE_LUDOVICO_TECHNIQUE = 329,
  COLLECTIBLE_SOY_MILK = 330,
  COLLECTIBLE_GODHEAD = 331,
  COLLECTIBLE_LAZARUS_RAGS = 332,
  COLLECTIBLE_MIND = 333,
  COLLECTIBLE_BODY = 334,
  COLLECTIBLE_SOUL = 335,
  COLLECTIBLE_DEAD_ONION = 336,
  COLLECTIBLE_BROKEN_WATCH = 337,
  COLLECTIBLE_BOOMERANG = 338,
  COLLECTIBLE_SAFETY_PIN = 339,
  COLLECTIBLE_CAFFEINE_PILL = 340,
  COLLECTIBLE_TORN_PHOTO = 341,
  COLLECTIBLE_BLUE_CAP = 342,
  COLLECTIBLE_LATCH_KEY = 343,
  COLLECTIBLE_MATCH_BOOK = 344,
  COLLECTIBLE_SYNTHOIL = 345,
  COLLECTIBLE_SNACK = 346,
  COLLECTIBLE_DIPLOPIA = 347,
  COLLECTIBLE_PLACEBO = 348,
  COLLECTIBLE_WOODEN_NICKEL = 349,
  COLLECTIBLE_TOXIC_SHOCK = 350,
  COLLECTIBLE_MEGA_BEAN = 351,
  COLLECTIBLE_GLASS_CANNON = 352,
  COLLECTIBLE_BOMBER_BOY = 353,
  COLLECTIBLE_CRACK_JACKS = 354,
  COLLECTIBLE_MOMS_PEARLS = 355,
  COLLECTIBLE_CAR_BATTERY = 356,
  COLLECTIBLE_BOX_OF_FRIENDS = 357,
  COLLECTIBLE_THE_WIZ = 358,
  COLLECTIBLE_8_INCH_NAILS = 359,
  COLLECTIBLE_INCUBUS = 360,
  COLLECTIBLE_FATES_REWARD = 361,
  COLLECTIBLE_LIL_CHEST = 362,
  COLLECTIBLE_SWORN_PROTECTOR = 363,
  COLLECTIBLE_FRIEND_ZONE = 364,
  COLLECTIBLE_LOST_FLY = 365,
  COLLECTIBLE_SCATTER_BOMBS = 366,
  COLLECTIBLE_STICKY_BOMBS = 367,
  COLLECTIBLE_EPIPHORA = 368,
  COLLECTIBLE_CONTINUUM = 369,
  COLLECTIBLE_MR_DOLLY = 370,
  COLLECTIBLE_CURSE_OF_THE_TOWER = 371,
  COLLECTIBLE_CHARGED_BABY = 372,
  COLLECTIBLE_DEAD_EYE = 373,
  COLLECTIBLE_HOLY_LIGHT = 374,
  COLLECTIBLE_HOST_HAT = 375,
  COLLECTIBLE_RESTOCK = 376,
  COLLECTIBLE_BURSTING_SACK = 377,
  COLLECTIBLE_NUMBER_TWO = 378,
  COLLECTIBLE_PUPULA_DUPLEX = 379,
  COLLECTIBLE_PAY_TO_PLAY = 380,
  COLLECTIBLE_EDENS_BLESSING = 381,
  COLLECTIBLE_FRIEND_BALL = 382,
  COLLECTIBLE_TEAR_DETONATOR = 383,
  COLLECTIBLE_LIL_GURDY = 384,
  COLLECTIBLE_BUMBO = 385,
  COLLECTIBLE_D12 = 386,
  COLLECTIBLE_CENSER = 387,
  COLLECTIBLE_KEY_BUM = 388,
  COLLECTIBLE_RUNE_BAG = 389,
  COLLECTIBLE_SERAPHIM = 390,
  COLLECTIBLE_BETRAYAL = 391,
  COLLECTIBLE_ZODIAC = 392,
  COLLECTIBLE_SERPENTS_KISS = 393,
  COLLECTIBLE_MARKED = 394,
  COLLECTIBLE_TECH_X = 395,
  COLLECTIBLE_VENTRICLE_RAZOR = 396,
  COLLECTIBLE_TRACTOR_BEAM = 397,
  COLLECTIBLE_GODS_FLESH = 398,
  COLLECTIBLE_MAW_OF_THE_VOID = 399,
  COLLECTIBLE_SPEAR_OF_DESTINY = 400,
  COLLECTIBLE_EXPLOSIVO = 401,
  COLLECTIBLE_CHAOS = 402,
  COLLECTIBLE_SPIDER_MOD = 403,
  COLLECTIBLE_FARTING_BABY = 404,
  COLLECTIBLE_GB_BUG = 405,
  COLLECTIBLE_D8 = 406,
  COLLECTIBLE_PURITY = 407,
  COLLECTIBLE_ATHAME = 408,
  COLLECTIBLE_EMPTY_VESSEL = 409,
  COLLECTIBLE_EVIL_EYE = 410,
  COLLECTIBLE_LUSTY_BLOOD = 411,
  COLLECTIBLE_CAMBION_CONCEPTION = 412,
  COLLECTIBLE_IMMACULATE_CONCEPTION = 413,
  COLLECTIBLE_MORE_OPTIONS = 414,
  COLLECTIBLE_CROWN_OF_LIGHT = 415,
  COLLECTIBLE_DEEP_POCKETS = 416,
  COLLECTIBLE_SUCCUBUS = 417,
  COLLECTIBLE_FRUIT_CAKE = 418,
  COLLECTIBLE_TELEPORT_2 = 419,
  COLLECTIBLE_BLACK_POWDER = 420,
  COLLECTIBLE_KIDNEY_BEAN = 421,
  COLLECTIBLE_GLOWING_HOUR_GLASS = 422,
  COLLECTIBLE_CIRCLE_OF_PROTECTION = 423,
  COLLECTIBLE_SACK_HEAD = 424,
  COLLECTIBLE_NIGHT_LIGHT = 425,
  COLLECTIBLE_OBSESSED_FAN = 426,
  COLLECTIBLE_MINE_CRAFTER = 427,
  COLLECTIBLE_PJS = 428,
  COLLECTIBLE_HEAD_OF_THE_KEEPER = 429,
  COLLECTIBLE_PAPA_FLY = 430,
  COLLECTIBLE_MULTIDIMENSIONAL_BABY = 431,
  COLLECTIBLE_GLITTER_BOMBS = 432,
  COLLECTIBLE_MY_SHADOW = 433,
  COLLECTIBLE_JAR_OF_FLIES = 434,
  COLLECTIBLE_LIL_LOKI = 435,
  COLLECTIBLE_MILK = 436,
  COLLECTIBLE_D7 = 437,
  COLLECTIBLE_BINKY = 438,
  COLLECTIBLE_MOMS_BOX = 439,
  COLLECTIBLE_KIDNEY_STONE = 440,
  COLLECTIBLE_MEGA_BLAST = 441,
  COLLECTIBLE_DARK_PRINCES_CROWN = 442,
  COLLECTIBLE_APPLE = 443,
  COLLECTIBLE_LEAD_PENCIL = 444,
  COLLECTIBLE_DOG_TOOTH = 445,
  COLLECTIBLE_DEAD_TOOTH = 446,
  COLLECTIBLE_LINGER_BEAN = 447,
  COLLECTIBLE_SHARD_OF_GLASS = 448,
  COLLECTIBLE_METAL_PLATE = 449,
  COLLECTIBLE_EYE_OF_GREED = 450,
  COLLECTIBLE_TAROT_CLOTH = 451,
  COLLECTIBLE_VARICOSE_VEINS = 452,
  COLLECTIBLE_COMPOUND_FRACTURE = 453,
  COLLECTIBLE_POLYDACTYLY = 454,
  COLLECTIBLE_DADS_LOST_COIN = 455,
  COLLECTIBLE_MIDNIGHT_SNACK = 456,
  COLLECTIBLE_CONE_HEAD = 457,
  COLLECTIBLE_BELLY_BUTTON = 458,
  COLLECTIBLE_SINUS_INFECTION = 459,
  COLLECTIBLE_GLAUCOMA = 460,
  COLLECTIBLE_PARASITOID = 461,
  COLLECTIBLE_EYE_OF_BELIAL = 462,
  COLLECTIBLE_SULFURIC_ACID = 463,
  COLLECTIBLE_GLYPH_OF_BALANCE = 464,
  COLLECTIBLE_ANALOG_STICK = 465,
  COLLECTIBLE_CONTAGION = 466,
  COLLECTIBLE_FINGER = 467,
  COLLECTIBLE_SHADE = 468,
  COLLECTIBLE_DEPRESSION = 469,
  COLLECTIBLE_HUSHY = 470,
  COLLECTIBLE_LIL_MONSTRO = 471,
  COLLECTIBLE_KING_BABY = 472,
  COLLECTIBLE_BIG_CHUBBY = 473,
  COLLECTIBLE_BROKEN_GLASS_CANNON = 474,
  COLLECTIBLE_PLAN_C = 475,
  COLLECTIBLE_D1 = 476,
  COLLECTIBLE_VOID = 477,
  COLLECTIBLE_PAUSE = 478,
  COLLECTIBLE_SMELTER = 479,
  COLLECTIBLE_COMPOST = 480,
  COLLECTIBLE_DATAMINER = 481,
  COLLECTIBLE_CLICKER = 482,
  COLLECTIBLE_MAMA_MEGA = 483,
  COLLECTIBLE_WAIT_WHAT = 484,
  COLLECTIBLE_CROOKED_PENNY = 485,
  COLLECTIBLE_DULL_RAZOR = 486,
  COLLECTIBLE_POTATO_PEELER = 487,
  COLLECTIBLE_METRONOME = 488,
  COLLECTIBLE_D_INFINITY = 489,
  COLLECTIBLE_EDENS_SOUL = 490,
  COLLECTIBLE_ACID_BABY = 491,
  COLLECTIBLE_YO_LISTEN = 492,
  COLLECTIBLE_ADRENALINE = 493,
  COLLECTIBLE_JACOBS_LADDER = 494,
  COLLECTIBLE_GHOST_PEPPER = 495,
  COLLECTIBLE_EUTHANASIA = 496,
  COLLECTIBLE_CAMO_UNDIES = 497,
  COLLECTIBLE_DUALITY = 498,
  COLLECTIBLE_EUCHARIST = 499,
  COLLECTIBLE_SACK_OF_SACKS = 500,
  COLLECTIBLE_GREEDS_GULLET = 501,
  COLLECTIBLE_LARGE_ZIT = 502,
  COLLECTIBLE_LITTLE_HORN = 503,
  COLLECTIBLE_BROWN_NUGGET = 504,
  COLLECTIBLE_POKE_GO = 505,
  COLLECTIBLE_BACKSTABBER = 506,
  COLLECTIBLE_SHARP_STRAW = 507,
  COLLECTIBLE_MOMS_RAZOR = 508,
  COLLECTIBLE_BLOODSHOT_EYE = 509,
  COLLECTIBLE_DELIRIOUS = 510,
  COLLECTIBLE_ANGRY_FLY = 511,
  COLLECTIBLE_BLACK_HOLE = 512,
  COLLECTIBLE_BOZO = 513,
  COLLECTIBLE_BROKEN_MODEM = 514,
  COLLECTIBLE_MYSTERY_GIFT = 515,
  COLLECTIBLE_SPRINKLER = 516,
  COLLECTIBLE_FAST_BOMBS = 517,
  COLLECTIBLE_BUDDY_IN_A_BOX = 518,
  COLLECTIBLE_LIL_DELIRIUM = 519,
  COLLECTIBLE_JUMPER_CABLES = 520,
  COLLECTIBLE_COUPON = 521,
  COLLECTIBLE_TELEKINESIS = 522,
  COLLECTIBLE_MOVING_BOX = 523,
  COLLECTIBLE_TECHNOLOGY_ZERO = 524,
  COLLECTIBLE_LEPROSY = 525,
  COLLECTIBLE_7_SEALS = 526,
  COLLECTIBLE_MR_ME = 527,
  COLLECTIBLE_ANGELIC_PRISM = 528,
  COLLECTIBLE_POP = 529,
  COLLECTIBLE_DEATHS_LIST = 530,
  COLLECTIBLE_HAEMOLACRIA = 531,
  COLLECTIBLE_LACHRYPHAGY = 532,
  COLLECTIBLE_TRISAGION = 533,
  COLLECTIBLE_SCHOOLBAG = 534,
  COLLECTIBLE_BLANKET = 535,
  COLLECTIBLE_SACRIFICIAL_ALTAR = 536,
  COLLECTIBLE_LIL_SPEWER = 537,
  COLLECTIBLE_MARBLES = 538,
  COLLECTIBLE_MYSTERY_EGG = 539,
  COLLECTIBLE_FLAT_STONE = 540,
  COLLECTIBLE_MARROW = 541,
  COLLECTIBLE_SLIPPED_RIB = 542,
  COLLECTIBLE_HALLOWED_GROUND = 543,
  COLLECTIBLE_POINTY_RIB = 544,
  COLLECTIBLE_BOOK_OF_THE_DEAD = 545,
  COLLECTIBLE_DADS_RING = 546,
  COLLECTIBLE_DIVORCE_PAPERS = 547,
  COLLECTIBLE_JAW_BONE = 548,
  COLLECTIBLE_BRITTLE_BONES = 549,
  COLLECTIBLE_BROKEN_SHOVEL_1 = 550,
  COLLECTIBLE_BROKEN_SHOVEL_2 = 551,
  COLLECTIBLE_MOMS_SHOVEL = 552,
  COLLECTIBLE_MUCORMYCOSIS = 553,
  COLLECTIBLE_2SPOOKY = 554,
  COLLECTIBLE_GOLDEN_RAZOR = 555,
  COLLECTIBLE_SULFUR = 556,
  COLLECTIBLE_FORTUNE_COOKIE = 557,
  COLLECTIBLE_EYE_SORE = 558,
  COLLECTIBLE_120_VOLT = 559,
  COLLECTIBLE_IT_HURTS = 560,
  COLLECTIBLE_ALMOND_MILK = 561,
  COLLECTIBLE_ROCK_BOTTOM = 562,
  COLLECTIBLE_NANCY_BOMBS = 563,
  COLLECTIBLE_BAR_OF_SOAP = 564,
  COLLECTIBLE_BLOOD_PUPPY = 565,
  COLLECTIBLE_DREAM_CATCHER = 566,
  COLLECTIBLE_PASCHAL_CANDLE = 567,
  COLLECTIBLE_DIVINE_INTERVENTION = 568,
  COLLECTIBLE_BLOOD_OATH = 569,
  COLLECTIBLE_PLAYDOUGH_COOKIE = 570,
  COLLECTIBLE_SOCKS = 571,
  COLLECTIBLE_EYE_OF_THE_OCCULT = 572,
  COLLECTIBLE_IMMACULATE_HEART = 573,
  COLLECTIBLE_MONSTRANCE = 574,
  COLLECTIBLE_INTRUDER = 575,
  COLLECTIBLE_DIRTY_MIND = 576,
  COLLECTIBLE_DAMOCLES = 577,
  COLLECTIBLE_FREE_LEMONADE = 578,
  COLLECTIBLE_SPIRIT_SWORD = 579,
  COLLECTIBLE_RED_KEY = 580,
  COLLECTIBLE_PSY_FLY = 581,
  COLLECTIBLE_WAVY_CAP = 582,
  COLLECTIBLE_ROCKET_IN_A_JAR = 583,
  COLLECTIBLE_BOOK_OF_VIRTUES = 584,
  COLLECTIBLE_ALABASTER_BOX = 585,
  COLLECTIBLE_STAIRWAY = 586,
  COLLECTIBLE_SOL = 588,
  COLLECTIBLE_LUNA = 589,
  COLLECTIBLE_MERCURIUS = 590,
  COLLECTIBLE_VENUS = 591,
  COLLECTIBLE_TERRA = 592,
  COLLECTIBLE_MARS = 593,
  COLLECTIBLE_JUPITER = 594,
  COLLECTIBLE_SATURNUS = 595,
  COLLECTIBLE_URANUS = 596,
  COLLECTIBLE_NEPTUNUS = 597,
  COLLECTIBLE_PLUTO = 598,
  COLLECTIBLE_VOODOO_HEAD = 599,
  COLLECTIBLE_EYE_DROPS = 600,
  COLLECTIBLE_ACT_OF_CONTRITION = 601,
  COLLECTIBLE_MEMBER_CARD = 602,
  COLLECTIBLE_BATTERY_PACK = 603,
  COLLECTIBLE_MOMS_BRACELET = 604,
  COLLECTIBLE_SCOOPER = 605,
  COLLECTIBLE_OCULAR_RIFT = 606,
  COLLECTIBLE_BOILED_BABY = 607,
  COLLECTIBLE_FREEZER_BABY = 608,
  COLLECTIBLE_ETERNAL_D6 = 609,
  COLLECTIBLE_BIRD_CAGE = 610,
  COLLECTIBLE_LARYNX = 611,
  COLLECTIBLE_LOST_SOUL = 612,
  COLLECTIBLE_BLOOD_BOMBS = 614,
  COLLECTIBLE_LIL_DUMPY = 615,
  COLLECTIBLE_BIRDS_EYE = 616,
  COLLECTIBLE_LODESTONE = 617,
  COLLECTIBLE_ROTTEN_TOMATO = 618,
  COLLECTIBLE_BIRTHRIGHT = 619,
  COLLECTIBLE_RED_STEW = 621,
  COLLECTIBLE_GENESIS = 622,
  COLLECTIBLE_SHARP_KEY = 623,
  COLLECTIBLE_BOOSTER_PACK = 624,
  COLLECTIBLE_MEGA_MUSH = 625,
  COLLECTIBLE_KNIFE_PIECE_1 = 626,
  COLLECTIBLE_KNIFE_PIECE_2 = 627,
  COLLECTIBLE_DEATH_CERTIFICATE = 628,
  COLLECTIBLE_BOT_FLY = 629,
  COLLECTIBLE_MEAT_CLEAVER = 631,
  COLLECTIBLE_EVIL_CHARM = 632,
  COLLECTIBLE_DOGMA = 633,
  COLLECTIBLE_PURGATORY = 634,
  COLLECTIBLE_STITCHES = 635,
  COLLECTIBLE_R_KEY = 636,
  COLLECTIBLE_KNOCKOUT_DROPS = 637,
  COLLECTIBLE_ERASER = 638,
  COLLECTIBLE_YUCK_HEART = 639,
  COLLECTIBLE_URN_OF_SOULS = 640,
  COLLECTIBLE_AKELDAMA = 641,
  COLLECTIBLE_MAGIC_SKIN = 642,
  COLLECTIBLE_REVELATION = 643,
  COLLECTIBLE_CONSOLATION_PRIZE = 644,
  COLLECTIBLE_TINYTOMA = 645,
  COLLECTIBLE_BRIMSTONE_BOMBS = 646,
  COLLECTIBLE_4_5_VOLT = 647,
  COLLECTIBLE_FRUITY_PLUM = 649,
  COLLECTIBLE_PLUM_FLUTE = 650,
  COLLECTIBLE_STAR_OF_BETHLEHEM = 651,
  COLLECTIBLE_CUBE_BABY = 652,
  COLLECTIBLE_VADE_RETRO = 653,
  COLLECTIBLE_FALSE_PHD = 654,
  COLLECTIBLE_SPIN_TO_WIN = 655,
  COLLECTIBLE_DAMOCLES_PASSIVE = 656,
  COLLECTIBLE_VASCULITIS = 657,
  COLLECTIBLE_GIANT_CELL = 658,
  COLLECTIBLE_TROPICAMIDE = 659,
  COLLECTIBLE_CARD_READING = 660,
  COLLECTIBLE_QUINTS = 661,
  COLLECTIBLE_TOOTH_AND_NAIL = 663,
  COLLECTIBLE_BINGE_EATER = 664,
  COLLECTIBLE_GUPPYS_EYE = 665,
  COLLECTIBLE_STRAW_MAN = 667,
  COLLECTIBLE_DADS_NOTE = 668,
  COLLECTIBLE_SAUSAGE = 669,
  COLLECTIBLE_OPTIONS = 670,
  COLLECTIBLE_CANDY_HEART = 671,
  COLLECTIBLE_POUND_OF_FLESH = 672,
  COLLECTIBLE_REDEMPTION = 673,
  COLLECTIBLE_SPIRIT_SHACKLES = 674,
  COLLECTIBLE_CRACKED_ORB = 675,
  COLLECTIBLE_EMPTY_HEART = 676,
  COLLECTIBLE_ASTRAL_PROJECTION = 677,
  COLLECTIBLE_C_SECTION = 678,
  COLLECTIBLE_LIL_ABADDON = 679,
  COLLECTIBLE_MONTEZUMAS_REVENGE = 680,
  COLLECTIBLE_LIL_PORTAL = 681,
  COLLECTIBLE_WORM_FRIEND = 682,
  COLLECTIBLE_BONE_SPURS = 683,
  COLLECTIBLE_HUNGRY_SOUL = 684,
  COLLECTIBLE_JAR_OF_WISPS = 685,
  COLLECTIBLE_SOUL_LOCKET = 686,
  COLLECTIBLE_FRIEND_FINDER = 687,
  COLLECTIBLE_INNER_CHILD = 688,
  COLLECTIBLE_GLITCHED_CROWN = 689,
  COLLECTIBLE_JELLY_BELLY = 690,
  COLLECTIBLE_SACRED_ORB = 691,
  COLLECTIBLE_SANGUINE_BOND = 692,
  COLLECTIBLE_SWARM = 693,
  COLLECTIBLE_HEARTBREAK = 694,
  COLLECTIBLE_BLOODY_GUST = 695,
  COLLECTIBLE_SALVATION = 696,
  COLLECTIBLE_VANISHING_TWIN = 697,
  COLLECTIBLE_TWISTED_PAIR = 698,
  COLLECTIBLE_AZAZELS_RAGE = 699,
  COLLECTIBLE_ECHO_CHAMBER = 700,
  COLLECTIBLE_ISAACS_TOMB = 701,
  COLLECTIBLE_VENGEFUL_SPIRIT = 702,
  COLLECTIBLE_ESAU_JR = 703,
  COLLECTIBLE_BERSERK = 704,
  COLLECTIBLE_DARK_ARTS = 705,
  COLLECTIBLE_ABYSS = 706,
  COLLECTIBLE_SUPPER = 707,
  COLLECTIBLE_STAPLER = 708,
  COLLECTIBLE_SUPLEX = 709,
  COLLECTIBLE_BAG_OF_CRAFTING = 710,
  COLLECTIBLE_FLIP = 711,
  COLLECTIBLE_LEMEGETON = 712,
  COLLECTIBLE_SUMPTORIUM = 713,
  COLLECTIBLE_RECALL = 714,
  COLLECTIBLE_HOLD = 715,
  COLLECTIBLE_KEEPERS_SACK = 716,
  COLLECTIBLE_KEEPERS_KIN = 717,
  COLLECTIBLE_KEEPERS_BOX = 719,
  COLLECTIBLE_EVERYTHING_JAR = 720,
  COLLECTIBLE_TMTRAINER = 721,
  COLLECTIBLE_ANIMA_SOLA = 722,
  COLLECTIBLE_SPINDOWN_DICE = 723,
  COLLECTIBLE_HYPERCOAGULATION = 724,
  COLLECTIBLE_IBS = 725,
  COLLECTIBLE_HEMOPTYSIS = 726,
  COLLECTIBLE_GHOST_BOMBS = 727,
  COLLECTIBLE_GELLO = 728,
  COLLECTIBLE_DECAP_ATTACK = 729,
  NUM_COLLECTIBLES = 730,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_TAROTCARD (300) */
declare enum Card {
  CARD_RANDOM = -1,
  CARD_NULL = 0,
  CARD_FOOL = 1,
  CARD_MAGICIAN = 2,
  CARD_HIGH_PRIESTESS = 3,
  CARD_EMPRESS = 4,
  CARD_EMPEROR = 5,
  CARD_HIEROPHANT = 6,
  CARD_LOVERS = 7,
  CARD_CHARIOT = 8,
  CARD_JUSTICE = 9,
  CARD_HERMIT = 10,
  CARD_WHEEL_OF_FORTUNE = 11,
  CARD_STRENGTH = 12,
  CARD_HANGED_MAN = 13,
  CARD_DEATH = 14,
  CARD_TEMPERANCE = 15,
  CARD_DEVIL = 16,
  CARD_TOWER = 17,
  CARD_STARS = 18,
  CARD_MOON = 19,
  CARD_SUN = 20,
  CARD_JUDGEMENT = 21,
  CARD_WORLD = 22,
  CARD_CLUBS_2 = 23,
  CARD_DIAMONDS_2 = 24,
  CARD_SPADES_2 = 25,
  CARD_HEARTS_2 = 26,
  CARD_ACE_OF_CLUBS = 27,
  CARD_ACE_OF_DIAMONDS = 28,
  CARD_ACE_OF_SPADES = 29,
  CARD_ACE_OF_HEARTS = 30,
  CARD_JOKER = 31,
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
  CARD_CHAOS = 42,
  CARD_CREDIT = 43,
  CARD_RULES = 44,
  CARD_HUMANITY = 45,
  CARD_SUICIDE_KING = 46,
  CARD_GET_OUT_OF_JAIL = 47,
  CARD_QUESTIONMARK = 48,
  CARD_DICE_SHARD = 49,
  CARD_EMERGENCY_CONTACT = 50,
  CARD_HOLY = 51,
  CARD_HUGE_GROWTH = 52,
  CARD_ANCIENT_RECALL = 53,
  CARD_ERA_WALK = 54,
  RUNE_SHARD = 55,
  CARD_REVERSE_FOOL = 56,
  CARD_REVERSE_MAGICIAN = 57,
  CARD_REVERSE_HIGH_PRIESTESS = 58,
  CARD_REVERSE_EMPRESS = 59,
  CARD_REVERSE_EMPEROR = 60,
  CARD_REVERSE_HIEROPHANT = 61,
  CARD_REVERSE_LOVERS = 62,
  CARD_REVERSE_CHARIOT = 63,
  CARD_REVERSE_JUSTICE = 64,
  CARD_REVERSE_HERMIT = 65,
  CARD_REVERSE_WHEEL_OF_FORTUNE = 66,
  CARD_REVERSE_STRENGTH = 67,
  CARD_REVERSE_HANGED_MAN = 68,
  CARD_REVERSE_DEATH = 69,
  CARD_REVERSE_TEMPERANCE = 70,
  CARD_REVERSE_DEVIL = 71,
  CARD_REVERSE_TOWER = 72,
  CARD_REVERSE_STARS = 73,
  CARD_REVERSE_MOON = 74,
  CARD_REVERSE_SUN = 75,
  CARD_REVERSE_JUDGEMENT = 76,
  CARD_REVERSE_WORLD = 77,
  CARD_CRACKED_KEY = 78,
  CARD_QUEEN_OF_HEARTS = 79,
  CARD_WILD = 80,
  CARD_SOUL_ISAAC = 81,
  CARD_SOUL_MAGDALENE = 82,
  CARD_SOUL_CAIN = 83,
  CARD_SOUL_JUDAS = 84,
  CARD_SOUL_BLUEBABY = 85,
  CARD_SOUL_EVE = 86,
  CARD_SOUL_SAMSON = 87,
  CARD_SOUL_AZAZEL = 88,
  CARD_SOUL_LAZARUS = 89,
  CARD_SOUL_EDEN = 90,
  CARD_SOUL_LOST = 91,
  CARD_SOUL_LILITH = 92,
  CARD_SOUL_KEEPER = 93,
  CARD_SOUL_APOLLYON = 94,
  CARD_SOUL_FORGOTTEN = 95,
  CARD_SOUL_BETHANY = 96,
  CARD_SOUL_JACOB = 97,
  NUM_CARDS = 98,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_TRINKET (350) */
declare enum TrinketType {
  TRINKET_NULL = 0,
  TRINKET_SWALLOWED_PENNY = 1,
  TRINKET_PETRIFIED_POOP = 2,
  TRINKET_AAA_BATTERY = 3,
  TRINKET_BROKEN_REMOTE = 4,
  TRINKET_PURPLE_HEART = 5,
  TRINKET_BROKEN_MAGNET = 6,
  TRINKET_ROSARY_BEAD = 7,
  TRINKET_CARTRIDGE = 8,
  TRINKET_PULSE_WORM = 9,
  TRINKET_WIGGLE_WORM = 10,
  TRINKET_RING_WORM = 11,
  TRINKET_FLAT_WORM = 12,
  TRINKET_STORE_CREDIT = 13,
  TRINKET_CALLUS = 14,
  TRINKET_LUCKY_ROCK = 15,
  TRINKET_MOMS_TOENAIL = 16,
  TRINKET_BLACK_LIPSTICK = 17,
  TRINKET_BIBLE_TRACT = 18,
  TRINKET_PAPER_CLIP = 19,
  TRINKET_MONKEY_PAW = 20,
  TRINKET_MYSTERIOUS_PAPER = 21,
  TRINKET_DAEMONS_TAIL = 22,
  TRINKET_MISSING_POSTER = 23,
  TRINKET_BUTT_PENNY = 24,
  TRINKET_MYSTERIOUS_CANDY = 25,
  TRINKET_HOOK_WORM = 26,
  TRINKET_WHIP_WORM = 27,
  TRINKET_BROKEN_ANKH = 28,
  TRINKET_FISH_HEAD = 29,
  TRINKET_PINKY_EYE = 30,
  TRINKET_PUSH_PIN = 31,
  TRINKET_LIBERTY_CAP = 32,
  TRINKET_UMBILICAL_CORD = 33,
  TRINKET_CHILDS_HEART = 34,
  TRINKET_CURVED_HORN = 35,
  TRINKET_RUSTED_KEY = 36,
  TRINKET_GOAT_HOOF = 37,
  TRINKET_MOMS_PEARL = 38,
  TRINKET_CANCER = 39,
  TRINKET_RED_PATCH = 40,
  TRINKET_MATCH_STICK = 41,
  TRINKET_LUCKY_TOE = 42,
  TRINKET_CURSED_SKULL = 43,
  TRINKET_SAFETY_CAP = 44,
  TRINKET_ACE_SPADES = 45,
  TRINKET_ISAACS_FORK = 46,
  TRINKET_POLAROID_OBSOLETE = 47,
  TRINKET_MISSING_PAGE = 48,
  TRINKET_BLOODY_PENNY = 49,
  TRINKET_BURNT_PENNY = 50,
  TRINKET_FLAT_PENNY = 51,
  TRINKET_COUNTERFEIT_PENNY = 52,
  TRINKET_TICK = 53,
  TRINKET_ISAACS_HEAD = 54,
  TRINKET_MAGGYS_FAITH = 55,
  TRINKET_JUDAS_TONGUE = 56,
  TRINKET_SOUL = 57,
  TRINKET_SAMSONS_LOCK = 58,
  TRINKET_CAINS_EYE = 59,
  TRINKET_EVES_BIRD_FOOT = 60,
  TRINKET_LEFT_HAND = 61,
  TRINKET_SHINY_ROCK = 62,
  TRINKET_SAFETY_SCISSORS = 63,
  TRINKET_RAINBOW_WORM = 64,
  TRINKET_TAPE_WORM = 65,
  TRINKET_LAZY_WORM = 66,
  TRINKET_CRACKED_DICE = 67,
  TRINKET_SUPER_MAGNET = 68,
  TRINKET_FADED_POLAROID = 69,
  TRINKET_LOUSE = 70,
  TRINKET_BOBS_BLADDER = 71,
  TRINKET_WATCH_BATTERY = 72,
  TRINKET_BLASTING_CAP = 73,
  TRINKET_STUD_FINDER = 74,
  TRINKET_ERROR = 75,
  TRINKET_POKER_CHIP = 76,
  TRINKET_BLISTER = 77,
  TRINKET_SECOND_HAND = 78,
  TRINKET_ENDLESS_NAMELESS = 79,
  TRINKET_BLACK_FEATHER = 80,
  TRINKET_BLIND_RAGE = 81,
  TRINKET_GOLDEN_HORSE_SHOE = 82,
  TRINKET_STORE_KEY = 83,
  TRINKET_RIB_OF_GREED = 84,
  TRINKET_KARMA = 85,
  TRINKET_LIL_LARVA = 86,
  TRINKET_MOMS_LOCKET = 87,
  TRINKET_NO = 88,
  TRINKET_CHILD_LEASH = 89,
  TRINKET_BROWN_CAP = 90,
  TRINKET_MECONIUM = 91,
  TRINKET_CRACKED_CROWN = 92,
  TRINKET_USED_DIAPER = 93,
  TRINKET_FISH_TAIL = 94,
  TRINKET_BLACK_TOOTH = 95,
  TRINKET_OUROBOROS_WORM = 96,
  TRINKET_TONSIL = 97,
  TRINKET_NOSE_GOBLIN = 98,
  TRINKET_SUPER_BALL = 99,
  TRINKET_VIBRANT_BULB = 100,
  TRINKET_DIM_BULB = 101,
  TRINKET_FRAGMENTED_CARD = 102,
  TRINKET_EQUALITY = 103,
  TRINKET_WISH_BONE = 104,
  TRINKET_BAG_LUNCH = 105,
  TRINKET_LOST_CORK = 106,
  TRINKET_CROW_HEART = 107,
  TRINKET_WALNUT = 108,
  TRINKET_DUCT_TAPE = 109,
  TRINKET_SILVER_DOLLAR = 110,
  TRINKET_BLOODY_CROWN = 111,
  TRINKET_PAY_TO_WIN = 112,
  TRINKET_LOCUST_OF_WRATH = 113,
  TRINKET_LOCUST_OF_PESTILENCE = 114,
  TRINKET_LOCUST_OF_FAMINE = 115,
  TRINKET_LOCUST_OF_DEATH = 116,
  TRINKET_LOCUST_OF_CONQUEST = 117,
  TRINKET_BAT_WING = 118,
  TRINKET_STEM_CELL = 119,
  TRINKET_HAIRPIN = 120,
  TRINKET_WOODEN_CROSS = 121,
  TRINKET_BUTTER = 122,
  TRINKET_FILIGREE_FEATHERS = 123,
  TRINKET_DOOR_STOP = 124,
  TRINKET_EXTENSION_CORD = 125,
  TRINKET_ROTTEN_PENNY = 126,
  TRINKET_BABY_BENDER = 127,
  TRINKET_FINGER_BONE = 128,
  TRINKET_JAW_BREAKER = 129,
  TRINKET_CHEWED_PEN = 130,
  TRINKET_BLESSED_PENNY = 131,
  TRINKET_BROKEN_SYRINGE = 132,
  TRINKET_SHORT_FUSE = 133,
  TRINKET_GIGANTE_BEAN = 134,
  TRINKET_LIGHTER = 135,
  TRINKET_BROKEN_PADLOCK = 136,
  TRINKET_MYOSOTIS = 137,
  TRINKET_M = 138,
  TRINKET_TEARDROP_CHARM = 139,
  TRINKET_APPLE_OF_SODOM = 140,
  TRINKET_FORGOTTEN_LULLABY = 141,
  TRINKET_BETHS_FAITH = 142,
  TRINKET_OLD_CAPACITOR = 143,
  TRINKET_BRAIN_WORM = 144,
  TRINKET_PERFECTION = 145,
  TRINKET_DEVILS_CROWN = 146,
  TRINKET_CHARGED_PENNY = 147,
  TRINKET_FRIENDSHIP_NECKLACE = 148,
  TRINKET_PANIC_BUTTON = 149,
  TRINKET_BLUE_KEY = 150,
  TRINKET_FLAT_FILE = 151,
  TRINKET_TELESCOPE_LENS = 152,
  TRINKET_MOMS_LOCK = 153,
  TRINKET_DICE_BAG = 154,
  TRINKET_HOLY_CROWN = 155,
  TRINKET_MOTHERS_KISS = 156,
  TRINKET_TORN_CARD = 157,
  TRINKET_TORN_POCKET = 158,
  TRINKET_GILDED_KEY = 159,
  TRINKET_LUCKY_SACK = 160,
  TRINKET_WICKED_CROWN = 161,
  TRINKET_AZAZELS_STUMP = 162,
  TRINKET_DINGLE_BERRY = 163,
  TRINKET_RING_CAP = 164,
  TRINKET_NUH_UH = 165,
  TRINKET_MODELING_CLAY = 166,
  TRINKET_POLISHED_BONE = 167,
  TRINKET_HOLLOW_HEART = 168,
  TRINKET_KIDS_DRAWING = 169,
  TRINKET_CRYSTAL_KEY = 170,
  TRINKET_KEEPERS_BARGAIN = 171,
  TRINKET_CURSED_PENNY = 172,
  TRINKET_YOUR_SOUL = 173,
  TRINKET_NUMBER_MAGNET = 174,
  TRINKET_STRANGE_KEY = 175,
  TRINKET_LIL_CLOT = 176,
  TRINKET_TEMPORARY_TATTOO = 177,
  TRINKET_SWALLOWED_M80 = 178,
  TRINKET_RC_REMOTE = 179,
  TRINKET_FOUND_SOUL = 180,
  TRINKET_EXPANSION_PACK = 181,
  TRINKET_BETHS_ESSENCE = 182,
  TRINKET_THE_TWINS = 183,
  TRINKET_ADOPTION_PAPERS = 184,
  TRINKET_CRICKET_LEG = 185,
  TRINKET_APOLLYONS_BEST_FRIEND = 186,
  TRINKET_BROKEN_GLASSES = 187,
  TRINKET_ICE_CUBE = 188,
  TRINKET_SIGIL_OF_BAPHOMET = 189,

  NUM_TRINKETS = 190,
  TRINKET_GOLDEN_FLAG = 0x8000,
  TRINKET_ID_MASK = 0x7fff,
}

/** For EntityType.ENTITY_PICKUP (5), PickupVariant.PICKUP_BED (380) */
declare enum BedSubType {
  BED_ISAAC = 0,
  BED_MOM = 1,
}

/** For EntityType.ENTITY_LASER (7) */
declare enum LaserSubType {
  /** A typical laser that has a start and end point. */
  LASER_SUBTYPE_LINEAR = 0,
  /** A controlled ring laser (e.g. Tech + Ludovico, Brim + Ludovico). */
  LASER_SUBTYPE_RING_LUDOVICO = 1,
  /** A ring laser that travels like a projectile (e.g. Tech X). */
  LASER_SUBTYPE_RING_PROJECTILE = 2,
  /** A ring laser that encircle their parents (e.g. Maw of the Void). */
  LASER_SUBTYPE_RING_FOLLOW_PARENT = 3,
  /** For Technology Zero; doesn't create an impact. */
  LASER_SUBTYPE_NO_IMPACT = 4,
}
