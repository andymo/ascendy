import { Args } from "grimoire-kolmafia";
import { Lifestyle } from "libram"
import { AscensionPath } from "./resources/core/path";

export const supportedPaths = [
  { path: AscensionPath.NONE, aliases: ["none", "unrestricted", "casual", "normal"] },
  //{ path: AscensionPath.BOOZETAFARIAN, aliases: ["boozetafarian", "booze", "boozeonly"] },
  //{ path: AscensionPath.TEETOTALER, aliases: ["teetotaler", "teet", "foodonly"] },
  //{ path: AscensionPath.OXYGENARIAN, aliases: ["oxygenarian", "oxy"] },

  { path: AscensionPath.UNDER_THE_SEA, aliases: ["sea", "uts", "underthesea"] }
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