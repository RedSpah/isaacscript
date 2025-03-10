/**
 * - Converts the specified amount of tears stat into the format of `EntityPlayer.MaxFireDelay` and
 *   adds it to the player.
 * - This function should only be used inside the `EVALUATE_CACHE` callback.
 * - In this context, the "tears stat" represents what is shown on the in-game stat UI.
 *
 * For example:
 *
 * ```ts
 * function evaluateCacheTears(player: EntityPlayer) {
 *   const numFoo = player.GetNumCollectible(CollectibleTypeCustom.FOO);
 *   const tearsStat = numFoo * FOO_TEARS_STAT;
 *   addTearsStat(player, tearsStat);
 * }
 * ```
 */
export function addTearsStat(player: EntityPlayer, tearsStat: float): void {
  const existingTearsStat = getTearsStat(player.MaxFireDelay);
  const newTearsStat = existingTearsStat + tearsStat;
  const newMaxFireDelay = getFireDelay(newTearsStat);
  player.MaxFireDelay = newMaxFireDelay;
}

/**
 * - The `EntityPlayer` object stores a player's tear rate in the `MaxFireDelay` field. This is
 *   equivalent to how many tears the player can shoot per frame.
 * - If you already have a "tears" stat and you want to convert it back to MaxFireDelay, then use
 *   this function.
 * - In this context, the "tears stat" represents what is shown on the in-game stat UI.
 */
export function getFireDelay(tearsStat: float): float {
  return math.max(30 / tearsStat - 1, -0.9999);
}

/**
 * - The `EntityPlayer` object stores a player's tear rate in the `MaxFireDelay` field. This is
 *   equivalent to how many tears the player can shoot per frame.
 * - If you want to convert this to the "tears" stat that is shown on the in-game stat UI, then use
 *   this function.
 */
export function getTearsStat(fireDelay: float): float {
  return 30 / (fireDelay + 1);
}

/**
 * Helper function to check if a given tear is from a familiar (as opposed to e.g. a player). This
 * is determined by looking at the parent.
 *
 * For the special case of Incubus and Blood Babies, the parent of the tear is always the player,
 * but the spawner entity of the tear changes. On frame 0, the spawner entity is equal to the
 * player, and on frame 1, the spawner entity is equal to the familiar. For this reason, you can
 * only use this function in the `POST_TEAR_INIT_VERY_LATE` callback or on frame 1+.
 *
 * If this function is called on frame 0, it will throw a run-time error.
 *
 * Note that this function does not work properly when the tear is from a Lead Pencil barrage. In
 * this case, it will always appear as if the tear is coming from a player.
 */
export function isTearFromFamiliar(tear: EntityTear): boolean {
  if (tear.FrameCount === 0) {
    error(
      'Failed to check if the given tear was from a player since the tear\'s frame count was equal to 0. (The "isTearFromFamiliar" function must only be used in the "POST_TEAR_INIT_VERY_LATE" callback or on frame 1 and onwards.)',
    );
  }

  // Normally, all tears have a spawner entity, which is either the player or the familiar.
  if (tear.SpawnerEntity === undefined) {
    return false;
  }

  // We cannot use `tear.SpawnerType` to determine this, since it is baked in to be equal to
  // `EntityType.PLAYER` regardless of whether the tear is from a player or familiar.
  const familiar = tear.SpawnerEntity.ToFamiliar();
  return familiar !== undefined;
}

/**
 * Helper function to check if a given tear is from a player (as opposed to e.g. a familiar). This
 * is determined by looking at the parent.
 *
 * For the special case of Incubus and Blood Babies, the parent of the tear is always the player,
 * but the spawner entity of the tear changes. On frame 0, the spawner entity is equal to the
 * player, and on frame 1, the spawner entity is equal to the familiar. For this reason, you can
 * only use this function in the `POST_TEAR_INIT_VERY_LATE` callback or on frame 1+.
 *
 * If this function is called on frame 0, it will throw a run-time error.
 *
 * Note that this function does not work properly when the tear is from a Lead Pencil barrage. In
 * this case, it will always appear as if the tear is coming from a player.
 */
export function isTearFromPlayer(tear: EntityTear): boolean {
  if (tear.FrameCount === 0) {
    error(
      'Failed to check if the given tear was from a player since the tear\'s frame count was equal to 0. (The "isTearFromPlayer" function must only be used in the "POST_TEAR_INIT_VERY_LATE" callback or on frame 1 and onwards.)',
    );
  }

  // Normally, all tears have a spawner entity, which is either the player or the familiar.
  if (tear.SpawnerEntity === undefined) {
    return false;
  }

  // We cannot use `tear.SpawnerType` to determine this, since it is baked in to be equal to
  // `EntityType.PLAYER` regardless of whether the tear is from a player or familiar.
  const player = tear.SpawnerEntity.ToPlayer();
  return player !== undefined;
}
