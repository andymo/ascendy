import { Args } from "grimoire-kolmafia";
import { Lifestyle } from "libram"

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

export const supportedPaths = [
  { path: AscensionPath.NONE, aliases: ["none", "unrestricted", "casual", "normal"] },
  //{ path: AscensionPath.BOOZETAFARIAN, aliases: ["boozetafarian", "booze", "boozeonly"] },
  //{ path: AscensionPath.TEETOTALER, aliases: ["teetotaler", "teet", "foodonly"] },
  //{ path: AscensionPath.OXYGENARIAN, aliases: ["oxygenarian", "oxy"] },

  //{ path: AscensionPath.STANDARD, aliases: ["standard"] },
];

export const ascendyOptions = Args.create(
  "ascendy",
  "Ascend, maybe well, maybe not so well.",
  {
    command: Args.string({
      help: "What to run.",
      options: [
        ["ascend", "(default) Attempt to ascend. If run in aftercore and passed a path, will tear through the gash and attempt to ascend."],
        ["sim", "Print the items and iotm used in this path. Display both hardcore and softcore requirements. Display intended gash options."],
        ["gash", "Execute optimal gash behavior for the passed path. Will not perm skills."],
        ["bedtime", "Manually run bedtime routine; outfit, nightcap, etc. Can be run in aftercore."],
      ],
      default: "ascend",
      setting: "",
    }),
    path: Args.custom<AscensionPath>(
      {
        help: "Define the path you want to sim or Valhalla for. See below.",
        default: AscensionPath.NONE,
        setting: "",
      },
      (value) => {
        value = value.toLowerCase();
        const foundPath = supportedPaths.find((element) => element.aliases.includes(value))
        if (foundPath !== undefined) {
          return foundPath.path;
        } else {
          return AscensionPath.NONE;
        }
      },
      "The path you want to take bruv.",
    ),
    lifestyle: Args.custom<Lifestyle>(
      {
        help: "Hardcore/Normal/Casual Ascension",
        options: [
          [Lifestyle.hardcore, "Gangster shit."],
          [Lifestyle.softcore, "(default) The usual."],
          [Lifestyle.casual, "Mostly for familiar runs."]
        ],
        default: Lifestyle.softcore,
        setting: "",
      },
      (value) => {
        switch(value.toLowerCase()) {
          case "hardcore":
          case "hc":
            return Lifestyle.hardcore;

          case "normal":
          case "softcore":
          case "sc":
            return Lifestyle.softcore;

          case "casual":
            return Lifestyle.casual;
          
          default:
            return Lifestyle.softcore;
        }
      },
      "Lifestyle Choice"
    ),
    version: Args.flag({ help: "Print the version and exit.", default: false, setting: "" }),
  },
  { positionalArgs: ["command"] },
);