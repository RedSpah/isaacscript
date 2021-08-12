import { BEAST_ROOM_SUBTYPE, RECOMMENDED_SHIFT_IDX } from "../constants";

/**
 * Helper function for quickly switching to a new room without playing a particular animation.
 * Always use this helper function over invoking `Game().ChangeRoom()` directly to ensure that you
 * do not forget to set the LeaveDoor property.
 */
export function changeRoom(roomIndex: int): void {
  const game = Game();
  const level = game.GetLevel();

  // LeaveDoor must be set before every ChangeRoom() invocation or else the function can send you to
  // the wrong room
  level.LeaveDoor = -1;

  game.ChangeRoom(roomIndex);
}

/**
 * Helper function to get type safety on a switch statement.
 * Very useful to be future-safe against people adding values to a type or an enum.
 *
 * Example:
 * ```
 * enum Situations {
 *   Situation1,
 *   Situation2,
 *   Situation3,
 *   // Situation4, // If we uncomment this line, the program will no longer compile
 * }
 *
 * function doThingBasedOnSituation(situation: Situation) {
 *   switch (situation) {
 *     case Situation1: {
 *       return 41;
 *     }
 *
 *     case Situation2: {
 *       return 68;
 *     }
 *
 *     case Situation3: {
 *       return 12;
 *     }
 *
 *     default: {
 *       ensureAllCases(situation);
 *       return 0;
 *     }
 *   }
 * }
 * ```
 */
export const ensureAllCases = (obj: never): never => obj;

export function getAngleDifference(angle1: float, angle2: float): float {
  const subtractedAngle = angle1 - angle2;
  return ((subtractedAngle + 180) % 360) - 180;
}

/**
 * TypeScriptToLua will transpile TypeScript enums to Lua tables that have a double mapping. Thus,
 * when you iterate over them, you will get both the names of the enums and the values of the enums,
 * in a random order. If all you need are the values of an enum, use this helper function.
 *
 * For a more in depth explanation, see:
 * https://isaacscript.github.io/docs/gotchas#iterating-over-enums
 */
export function getEnumValues(transpiledEnum: unknown): int[] {
  const enumValues: int[] = [];
  for (const [key, value] of pairs(transpiledEnum)) {
    // Ignore the reverse mappings created by TypeScriptToLua
    if (type(key) === "string") {
      enumValues.push(value);
    }
  }

  return enumValues;
}

/**
 * Helper function to get the room index of the current room. Use this instead of calling
 * `Game().GetLevel().GetCurrentRoomIndex()` directly to avoid bugs with big rooms.
 * (Big rooms can return the specific 1x1 quadrant that the player is in, which can break data
 * structures that use the room index as an index.)
 */
export function getRoomIndex(): int {
  const game = Game();
  const level = game.GetLevel();

  const roomIndex = level.GetCurrentRoomDesc().SafeGridIndex;
  if (roomIndex < 0) {
    // SafeGridIndex is always -1 for rooms outside the grid
    return level.GetCurrentRoomIndex();
  }

  return roomIndex;
}

/**
 * Converts a room X and Y coordinate to a position. For example, the coordinates of 0, 0 are
 * equal to `Vector(80, 160)`.
 */
export function gridToPos(x: int, y: int): Vector {
  const game = Game();
  const room = game.GetRoom();

  x += 1;
  y += 1;

  const gridIndex = y * room.GetGridWidth() + x;

  return room.GetGridPosition(gridIndex);
}

/**
 * Helper function for determining whether the current room is a crawlspace. Use this function over
 * comparing to `GridRooms.ROOM_DUNGEON_IDX` directly since there is a special case of the player
 * being in The Beast room.
 */
export function inCrawlspace(): boolean {
  const game = Game();
  const level = game.GetLevel();
  const roomDesc = level.GetCurrentRoomDesc();
  const roomData = roomDesc.Data;
  const roomSubType = roomData.Subtype;
  const roomIndex = getRoomIndex();

  return (
    roomIndex === GridRooms.ROOM_DUNGEON_IDX &&
    roomSubType !== BEAST_ROOM_SUBTYPE
  );
}

/**
 * Helper function to initialize an RNG object.
 *
 * Example:
 * ```
 * const startSeed = Game():GetSeeds():GetStartSeed();
 * const rng = initRNG(startSeed);
 * const fiftyFiftyChance = rng.RandomInt(2) === 0;
 * ```
 *
 * @param seed The seed to initialize it with.
 * (If you aren't initializing it with a seed, then don't use this function and instead simply call
 * the `RNG()` constructor.)
 */
export function initRNG(seed: int): RNG {
  const rng = RNG();

  // The game expects seeds in the range of 0 to 4294967295
  rng.SetSeed(seed, RECOMMENDED_SHIFT_IDX);

  return rng;
}

export function lerp(a: number, b: number, pos: float): number {
  return a + (b - a) * pos;
}

export function lerpAngleDegrees(
  aStart: number,
  aEnd: number,
  percent: float,
): number {
  return aStart + getAngleDifference(aStart, aEnd) * percent;
}

/**
 * Whether or not the player is playing on a set seed (i.e. that they entered in a specific seed by
 * pressing tab on the character selection screen). When the player resets the game on a set seed,
 * the game will not switch to a different seed.
 */
export function onSetSeed(): boolean {
  const game = Game();
  const seeds = game.GetSeeds();
  const customRun = seeds.IsCustomRun();
  const challenge = Isaac.GetChallenge();

  return challenge === Challenge.CHALLENGE_NULL && customRun;
}

/**
 * In a Map, you can use the `clear` method to delete every element. However, in a LuaTable, the
 * `clear` method does not exist. Use this helper function as a drop-in replacement for this.
 */
export function tableClear(table: LuaTable): void {
  for (const [key] of pairs(table)) {
    table.delete(key);
  }
}
