import {
  ItemConfigPillEffectClass,
  ItemConfigPillEffectType,
  PillColor,
  PillEffect,
} from "isaac-typescript-definitions";
import { itemConfig } from "../core/cachedClasses";
import {
  FIRST_HORSE_PILL_COLOR,
  FIRST_PILL_COLOR,
  FIRST_PILL_EFFECT,
  LAST_HORSE_PILL_COLOR,
  LAST_NORMAL_PILL_COLOR,
  LAST_VANILLA_PILL_EFFECT,
} from "../core/constantsFirstLast";
import { FALSE_PHD_PILL_CONVERSIONS } from "../maps/falsePHDPillConversions";
import { PHD_PILL_CONVERSIONS } from "../maps/PHDPillConversions";
import {
  DEFAULT_PILL_EFFECT_CLASS,
  PILL_EFFECT_CLASSES,
} from "../objects/pillEffectClasses";
import {
  DEFAULT_PILL_EFFECT_NAME,
  PILL_EFFECT_NAMES,
} from "../objects/pillEffectNames";
import {
  DEFAULT_PILL_EFFECT_TYPE,
  PILL_EFFECT_TYPES,
} from "../objects/pillEffectTypes";
import { getEnumValues } from "./enums";
import { asNumber, asPillColor } from "./types";
import { iRange } from "./utils";

/**
 * Add this to a `PillColor` to get the corresponding giant pill color.
 *
 * Corresponds to the vanilla `PillColor.GIANT_FLAG` value.
 *
 * 1 << 11
 */
const HORSE_PILL_ADJUSTMENT = 2048;

/**
 * Helper function to get an array with every non-null pill color. This includes all gold colors and
 * all horse colors.
 */
export function getAllPillColors(): PillColor[] {
  const pillColors = getEnumValues(PillColor);
  pillColors.slice(); // Remove `PillColor.NULL`
  return pillColors;
}

/**
 * Helper function to get the associated pill effect after False PHD is acquired. If a pill effect
 * is not altered by False PHD, then the same pill effect will be returned.
 */
export function getFalsePHDPillEffect(pillEffect: PillEffect): PillEffect {
  const convertedPillEffect = FALSE_PHD_PILL_CONVERSIONS.get(pillEffect);
  return convertedPillEffect === undefined ? pillEffect : convertedPillEffect;
}

/**
 * Helper function to get the corresponding horse pill color from a normal pill color.
 *
 * For example, passing `PillColor.BLUE_BLUE` would result in 2049, which is the value that
 * corresponds to the horse pill color for blue/blue.
 */
export function getHorsePillColor(pillColor: PillColor): PillColor {
  return asNumber(pillColor) + HORSE_PILL_ADJUSTMENT;
}

/** Helper function to get an array with every non-gold horse pill color. */
export function getHorsePillColors(): PillColor[] {
  return iRange(FIRST_HORSE_PILL_COLOR, LAST_HORSE_PILL_COLOR);
}

/**
 * Helper function to get the corresponding normal pill color from a horse pill color.
 *
 * For example, passing 2049 would result in `PillColor.BLUE_BLUE`.
 *
 * If called with a non-horse pill color, this function will return back the same color.
 */
export function getNormalPillColorFromHorse(pillColor: PillColor): PillColor {
  const normalPillColor = asPillColor(
    asNumber(pillColor) - HORSE_PILL_ADJUSTMENT,
  );

  return normalPillColor > PillColor.NULL ? normalPillColor : pillColor;
}

/** Helper function to get an array with every non-gold and non-horse pill color. */
export function getNormalPillColors(): PillColor[] {
  return iRange(FIRST_PILL_COLOR, LAST_NORMAL_PILL_COLOR);
}

/**
 * Helper function to get the associated pill effect after PHD is acquired. If a pill effect is not
 * altered by PHD, then the same pill effect will be returned.
 */
export function getPHDPillEffect(pillEffect: PillEffect): PillEffect {
  const convertedPillEffect = PHD_PILL_CONVERSIONS.get(pillEffect);
  return convertedPillEffect === undefined ? pillEffect : convertedPillEffect;
}

/**
 * Helper function to get a pill effect class from a PillEffect enum value. In this context, the
 * class is equal to the numerical prefix in the "class" tag in the "pocketitems.xml" file. Use the
 * `getPillEffectType` helper function to determine whether or not the pill effect is positive,
 * negative, or neutral.
 *
 * Due to limitations in the API, this function will not work properly for modded pill effects, and
 * will always return `DEFAULT_PILL_EFFECT_CLASS` in those cases.
 */
export function getPillEffectClass(
  pillEffect: PillEffect,
): ItemConfigPillEffectClass {
  // `ItemConfigPillEffect` does not contain the "class" tag, so we must manually compile a map of
  // pill effect classes. Modded pill effects are not included in the map.
  const pillEffectClass = PILL_EFFECT_CLASSES[pillEffect];
  // Handle modded pill effects.
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return pillEffectClass === undefined
    ? DEFAULT_PILL_EFFECT_CLASS
    : pillEffectClass;
}

/**
 * Helper function to get a pill effect name from a PillEffect enum value.
 *
 * For example, `getPillEffectName(PillEffect.BAD_GAS)` would return "Bad Gas".
 */
export function getPillEffectName(pillEffect: PillEffect): string {
  // `ItemConfigPillEffect.Name` is bugged with vanilla pill effects on patch v1.7.6, so we use a
  // hard-coded map as a workaround.
  const pillEffectName = PILL_EFFECT_NAMES[pillEffect];
  // Handle modded pill effects.
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (pillEffectName !== undefined) {
    return pillEffectName;
  }

  const itemConfigPillEffect = itemConfig.GetPillEffect(pillEffect);
  if (itemConfigPillEffect !== undefined) {
    return itemConfigPillEffect.Name;
  }

  return DEFAULT_PILL_EFFECT_NAME;
}

/**
 * Helper function to get a pill effect type from a PillEffect enum value. In this context, the type
 * is equal to positive, negative, or neutral. This is derived from the suffix of the "class" tag in
 * the "pocketitems.xml" file. Use the `getPillEffectClass` helper function to determine the "power"
 * of the pill.
 *
 * Due to limitations in the API, this function will not work properly for modded pill effects, and
 * will always return `DEFAULT_PILL_EFFECT_TYPE` in those cases.
 */
export function getPillEffectType(
  pillEffect: PillEffect,
): ItemConfigPillEffectType {
  // `ItemConfigPillEffect` does not contain the "class" tag, so we must manually compile a map of
  // pill effect classes. Modded pill effects are not included in the map.
  const pillEffectClass = PILL_EFFECT_TYPES[pillEffect];
  // Handle modded pill effects.
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return pillEffectClass === undefined
    ? DEFAULT_PILL_EFFECT_TYPE
    : pillEffectClass;
}

/** Helper function to get an array with every vanilla pill effect. */
export function getVanillaPillEffects(): PillEffect[] {
  return iRange(FIRST_PILL_EFFECT, LAST_VANILLA_PILL_EFFECT);
}

export function isHorsePill(pillColor: PillColor): boolean {
  return asNumber(pillColor) > HORSE_PILL_ADJUSTMENT;
}

export function isModdedPillEffect(pillEffect: PillEffect): boolean {
  return !isVanillaPillEffect(pillEffect);
}

export function isVanillaPillEffect(pillEffect: PillEffect): boolean {
  return pillEffect <= LAST_VANILLA_PILL_EFFECT;
}
