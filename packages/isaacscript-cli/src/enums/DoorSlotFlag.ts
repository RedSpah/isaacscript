/* eslint-disable no-bitwise */

import { DoorSlot } from "./DoorSlot";

declare type BitFlag = number & { readonly __bitFlagBrand: symbol };
declare type BitFlags<T extends BitFlag> = T & {
  readonly __bitFlagsBrand: T;
};

/**
 * For `GridEntityType.DOOR` (16).
 *
 * Corresponds to `DoorSlotFlag`.
 *
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * @enum
 * @notExported
 */
const DoorSlotFlagInternal = {
  /** 1 << 0 */
  LEFT_0: 1 << DoorSlot.LEFT_0,

  /** 1 << 1 */
  UP_0: 1 << DoorSlot.UP_0,

  /** 1 << 2 */
  RIGHT_0: 1 << DoorSlot.RIGHT_0,

  /** 1 << 3 */
  DOWN_0: 1 << DoorSlot.DOWN_0,

  /** 1 << 4 */
  LEFT_1: 1 << DoorSlot.LEFT_1,

  /** 1 << 5 */
  UP_1: 1 << DoorSlot.UP_1,

  /** 1 << 6 */
  RIGHT_1: 1 << DoorSlot.RIGHT_1,

  /** 1 << 7 */
  DOWN_1: 1 << DoorSlot.DOWN_1,
} as const;

type DoorSlotFlagValue = BitFlag & {
  readonly __doorSlotFlagBrand: symbol;
};
type DoorSlotFlagType = {
  [K in keyof typeof DoorSlotFlagInternal]: DoorSlotFlagValue;
};

export const DoorSlotFlag = DoorSlotFlagInternal as DoorSlotFlagType;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type DoorSlotFlag = DoorSlotFlagType[keyof DoorSlotFlagType];

export const DoorSlotFlagZero = 0 as BitFlags<DoorSlotFlag>;
