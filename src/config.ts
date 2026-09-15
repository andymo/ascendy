import { Args } from "grimoire-kolmafia";

export const enum Lifestyle {
  HARDCORE,
  NORMAL,
  CASUAL,
}

export const enum AscensionPath {
  UNRESTRICTED,
  STANDARD,
  TEETOTALER,
  BOOZETAFARIAN,
  OXYGENARIAN,
}

export const pathAliases = [
  { path: AscensionPath.UNRESTRICTED, aliases: ["unrestricted", "casual", "normal"] },
  { path: AscensionPath.STANDARD, aliases: ["standard"] },
  { path: AscensionPath.TEETOTALER, aliases: ["teetotaler", "teet", "foodonly"] },
  { path: AscensionPath.BOOZETAFARIAN, aliases: ["boozetafarian", "booze", "boozeonly"] },
  { path: AscensionPath.OXYGENARIAN, aliases: ["oxygenarian", "oxy"] },
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
        help: "Define the path you want to sim or Valhalla for.",
        options: [

        ],
        default: AscensionPath.UNRESTRICTED,
        setting: "",
      },
      (value) => {
        value = value.toLowerCase();
        const foundPath = pathAliases.find((element) => element.aliases.includes(value))
        if (foundPath !== undefined) {
          return foundPath.path;
        } else {
          return AscensionPath.UNRESTRICTED;
        }
      },
      "The path you want to take bruv.",
    ),
    lifestyle: Args.custom<Lifestyle>(
      {
        help: "Hardcore/Normal/Casual Ascension",
        options: [
          [Lifestyle.HARDCORE, "Gangster shit."],
          [Lifestyle.NORMAL, "(default) The usual."],
          [Lifestyle.CASUAL, "Mostly for familiar runs."]
        ],
        default: Lifestyle.NORMAL,
        setting: "",
      },
      (value) => {
        switch(value.toLowerCase()) {
          case "hardcore":
            return Lifestyle.HARDCORE;

          case "normal":
          case "softcore":
            return Lifestyle.NORMAL;

          case "casual":
            return Lifestyle.CASUAL;
          
          default:
            return Lifestyle.NORMAL;
        }
      },
      "Lifestyle Choice"
    ),
    version: Args.flag({ help: "Print the version and exit.", default: false, setting: "" }),
  },
  { positionalArgs: ["command"] },
);