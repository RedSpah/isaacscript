import {
  ButtonAction,
  InputHook,
  ModCallback,
} from "isaac-typescript-definitions";
import { Exported } from "../../../decorators";
import { getPlayerIndex } from "../../../functions/playerIndex";
import { PlayerIndex } from "../../../types/PlayerIndex";
import { Feature } from "../../private/Feature";

export class PressInput extends Feature {
  /** @internal */
  public override v = {
    run: {
      buttonActionTuples: [] as Array<[PlayerIndex, ButtonAction]>,
    },
  };

  /** @internal */
  constructor() {
    super();

    this.callbacksUsed = [
      [
        ModCallback.INPUT_ACTION,
        [this.isActionTriggered, InputHook.IS_ACTION_TRIGGERED],
      ], // 13
    ];
  }

  // ModCallback.INPUT_ACTION (13)
  // InputHook.IS_ACTION_TRIGGERED (1)
  private isActionTriggered = (
    entity: Entity | undefined,
    _inputHook: InputHook,
    buttonAction: ButtonAction,
  ) => {
    if (entity === undefined) {
      return undefined;
    }

    const player = entity.ToPlayer();
    if (player === undefined) {
      return undefined;
    }

    const playerIndex = getPlayerIndex(player);

    for (let i = this.v.run.buttonActionTuples.length - 1; i >= 0; i--) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const tuple = this.v.run.buttonActionTuples[i]!;
      const [tuplePlayerIndex, tupleButtonAction] = tuple;

      if (
        tuplePlayerIndex === playerIndex &&
        tupleButtonAction === buttonAction
      ) {
        this.v.run.buttonActionTuples.splice(i);
        return true;
      }
    }

    return undefined;
  };

  /**
   * Helper function to press an arbitrary `ButtonAction` on the next possible input poll. In most
   * cases, this will be equivalent to if the first player pressed the corresponding input. It
   * usually takes 1 frame for the input to take effect.
   *
   * In order to use this function, you must upgrade your mod with `ISCFeature.PRESS_INPUT`.
   */
  @Exported
  public pressInput(player: EntityPlayer, buttonAction: ButtonAction): void {
    const playerIndex = getPlayerIndex(player);
    this.v.run.buttonActionTuples.push([playerIndex, buttonAction]);
  }
}
