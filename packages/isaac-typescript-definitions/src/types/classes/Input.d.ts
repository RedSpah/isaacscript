import { ButtonAction } from "../../enums/ButtonAction";
import { ControllerIndex } from "../../enums/ControllerIndex";
import { Keyboard } from "../../enums/Keyboard";
import { Mouse } from "../../enums/Mouse";

declare global {
  /**
   * The `Input` class contains a collection of methods having to do with detecting player input.
   *
   * `Input` is technically not an Isaac API class; it has a type of `table`.
   *
   * @noSelf
   */
  namespace Input {
    function GetActionValue(
      buttonAction: ButtonAction,
      controllerIndex: ControllerIndex,
    ): float;

    function GetButtonValue(
      keyboard: Keyboard,
      controllerIndex: ControllerIndex,
    ): float;

    function GetMousePosition(gameCoords: boolean): Vector;

    function IsActionPressed(
      buttonAction: ButtonAction,
      controllerIndex: ControllerIndex,
    ): boolean;

    function IsActionTriggered(
      buttonAction: ButtonAction,
      controllerIndex: ControllerIndex,
    ): boolean;

    function IsButtonPressed(
      keyboard: Keyboard,
      controllerIndex: ControllerIndex,
    ): boolean;

    function IsButtonTriggered(
      keyboard: Keyboard,
      controllerIndex: ControllerIndex,
    ): boolean;

    function IsMouseBtnPressed(mouse: Mouse): boolean;
  }
}
