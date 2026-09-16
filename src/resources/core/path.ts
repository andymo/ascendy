import { Outfit, OutfitSpec } from "grimoire-kolmafia"
import { abort, Class, Item, Path, print } from "kolmafia";
import { $familiar, $item, ascend, Lifestyle, prepareAscension } from "libram";

export const enum AscensionPath {
  NONE = 0,
  BOOZETAFARIAN = 1,
  TEETOTALER = 2,
  OXYGENARIAN = 3,
  BEES_HATE_YOU = 4,
  SURPRISING_FIST = 6,
  TRENDY = 7,
  AVATAR_OF_BORIS = 8,
  BUGBEAR_INVASTION = 9,
  ZOMBIE_SLAYER = 10,
  CLASS_ACT = 11,
  AVATAR_OF_JARSLBERG = 12,
  BIG = 14,
  KOLHS = 15,
  CLASS_ACT_II = 16,
  AVATAR_OF_SNEAKY_PETE = 17,
  SLOW_AND_STEADY = 18,
  HEAVY_RAINS = 19,
  PICKY = 21,
  STANDARD = 22,
  ACTUALLY_ED_THE_UNDYING = 23,
  CRAZY_RANDOM_SUMMER = 24,
  COMMUNITY_SERVICE = 25,
  AVATAR_OF_WEST_OF_LOATHING = 26,
  THE_SOURCE = 27,
  NUCLEAR_AUTUMN = 28,
  GELATINOUS_NOOB = 29,
  LICENSE_TO_ADVENTURE = 30,
  LIVE_ASCEND_REPEAT = 31,
  POKEFAM = 32,
  GLOVER = 33,
  DISGUISES_DELIMIT = 34,
  DARK_GYFFTE = 35,
  CRAZY_RANDOM_SUMMER_TWO = 36,
  KINGDOM_OF_EXPLOATHING = 37,
  PATH_OF_THE_PLUMBER = 38,
  LOWKEY = 39,
  GREY_GOO = 40,
  YOU_ROBOT = 41,
  QUANTUM = 42,
  WILDFIRE = 43,
  GREY_YOU = 44,
  JOURNEYMAN = 45,
  DINOSAURS = 46,
  SHADOWS_OVER_LOATHING = 47,
  LEGACY_OF_LOATHING = 48,
  SMALL = 49,
  WEREPROFESSOR = 50,
  ELEVEN_THINGS = 51,
  AVANT_GUARD = 52,
  Z_IS_FOR_ZOOTOMIST = 53,
  HAT_TRICK = 54,
  UNDER_THE_SEA = 55,
  ADVENTURER_MEATS_WORLD = 56,
  THRIFTY = 57,
  BLUE_VS_RED = 58,

  BAD_MOON = 999,
}

export type GashConfig = {
  // valhalla
  playerClass: Class,
  lifestyle: Lifestyle,
  deli: Item,
  pet: Item,
  moon: string,

  // preparation
  /*
  garden: string,
  eudora: string,
  chateau: {
    desk: string,
    ceiling: string,
    nightstand: string
  }
  */
}

export abstract class AscendyPath {
  abstract path: Path;
  abstract ascensionConfig: GashConfig;

  private customPrepareAscension(): void {
    print('No custom preparation needed!');
  }

  private nightcap(): void {
    // add constants for nightcaps of choice
    // attempt nightcap logic here in nightcap incl. stooper
    // abort if unused alcohol
    // check avatar and path and stuff too, so need path attribute as well as nightcaps
    print("No nightcap defined, not nightcapping.");
  }

  private jammies(): void {
    const spec: OutfitSpec = {
      // pants have +10 fam weight rollover bonus
      equip: [$item`li'l unicorn costume`, $item`ratskin pajama pants`],
      familiar: $familiar`Trick-or-Treating Tot`,
      modifier: "adv"
    }
    const outfit = new Outfit();
    if (!outfit.equip(spec)) {
      throw "Unable to equip all jammies, check familiar and stuff"
    }
    outfit.dress();
  }

  ascendy(): void {
    // Custom stuff in preparation (e.g., codpiece smuggling)
    this.customPrepareAscension();

    // Preparation for ascension
    print('Setting up garden, eudora, and chateau.');
    // prepareAscension({ garden: ascensionConfig.garden, ... })
    prepareAscension();
    
    ascend({
      path: this.path,
      playerClass: this.ascensionConfig.playerClass,
      lifestyle: Lifestyle.softcore,
      //@ts-expect-error: InputMoonSign isn't exported.
      moon: this.ascensionConfig.moon,
      consumable: this.ascensionConfig.deli,
      pet: this.ascensionConfig.pet,
    })
  }

  bedtime(): void {
    this.nightcap();
    this.jammies();
  }
}