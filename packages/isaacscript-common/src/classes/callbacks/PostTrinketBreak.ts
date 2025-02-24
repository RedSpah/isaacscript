import {
  DamageFlag,
  EntityType,
  ModCallback,
  PickupVariant,
  TrinketType,
} from "isaac-typescript-definitions";
import { ModCallbackCustom } from "../../enums/ModCallbackCustom";
import { defaultMapGetPlayer } from "../../functions/playerDataStructures";
import { shouldFireTrinketType } from "../../shouldFire";
import { PlayerIndex } from "../../types/PlayerIndex";
import { DefaultMap } from "../DefaultMap";
import { CustomCallback } from "../private/CustomCallback";

const TRINKETS_THAT_CAN_BREAK: readonly TrinketType[] = [
  TrinketType.WISH_BONE,
  TrinketType.WALNUT,
];

export class PostTrinketBreak extends CustomCallback<ModCallbackCustom.POST_TRINKET_BREAK> {
  public override v = {
    run: {
      // We cannot use a nested `DefaultMap` here.
      playersTrinketMap: new DefaultMap<PlayerIndex, Map<TrinketType, int>>(
        () => new Map(),
      ),
    },
  };

  constructor() {
    super();

    this.callbacksUsed = [
      [
        ModCallback.ENTITY_TAKE_DMG,
        [this.entityTakeDmgPlayer, EntityType.PLAYER],
      ], // 11
    ];

    this.customCallbacksUsed = [
      [
        ModCallbackCustom.POST_PEFFECT_UPDATE_REORDERED,
        [this.postPEffectUpdateReordered],
      ],
    ];
  }

  protected override shouldFire = shouldFireTrinketType;

  // ModCallback.ENTITY_TAKE_DMG (11)
  // EntityType.PLAYER (1)
  private entityTakeDmgPlayer = (
    entity: Entity,
    _amount: float,
    _damageFlags: BitFlags<DamageFlag>,
    _source: EntityRef,
    _countdownFrames: int,
  ): boolean | undefined => {
    const player = entity.ToPlayer();
    if (player === undefined) {
      return undefined;
    }

    const trinketMap = defaultMapGetPlayer(
      this.v.run.playersTrinketMap,
      player,
    );

    for (const trinketType of TRINKETS_THAT_CAN_BREAK) {
      const numTrinketsHeld = player.GetTrinketMultiplier(trinketType);
      let oldNumTrinketsHeld = trinketMap.get(trinketType);
      if (oldNumTrinketsHeld === undefined) {
        oldNumTrinketsHeld = 0;
      }

      if (numTrinketsHeld >= oldNumTrinketsHeld) {
        continue;
      }

      trinketMap.set(trinketType, numTrinketsHeld);

      // Ensure that the trinket was not dropped on the ground.
      const numTrinketsOnGround = Isaac.CountEntities(
        undefined,
        EntityType.PICKUP,
        PickupVariant.TRINKET,
        trinketType,
      );
      if (numTrinketsOnGround > 0) {
        continue;
      }

      this.fire(player, trinketType);
    }

    return undefined;
  };

  // ModCallbackCustom.POST_PEFFECT_UPDATE_REORDERED
  private postPEffectUpdateReordered = (player: EntityPlayer) => {
    // On every frame, keep track of how many trinkets we have.
    const trinketMap = defaultMapGetPlayer(
      this.v.run.playersTrinketMap,
      player,
    );

    for (const trinketType of TRINKETS_THAT_CAN_BREAK) {
      const numTrinkets = player.GetTrinketMultiplier(trinketType);
      trinketMap.set(trinketType, numTrinkets);
    }
  };
}
