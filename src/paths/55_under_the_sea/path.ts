import { Path } from "kolmafia";
import { AscendyPath, AscendyPathConfig } from "../../resources/core/path";
import { $class, $familiar, $item, $path, Lifestyle } from "libram";

export class UnderTheSeaPath extends AscendyPath {
  path: Path = $path`11,037 Leagues Under the Sea`;
  config: AscendyPathConfig = {
    playerClass: $class`Pastamancer`,
    lifestyle: Lifestyle.softcore,
    moon: "gnomish gnomads camp",
    ascend: {
      prep: {},
      valhalla: {
        deli: $item`astral six-pack`,
        pet: $item`astral pet sweater`,
      }
    },
    diet: {},
    bedtime: {
      jammiesSpec: {
        // pants have +10 fam weight rollover bonus
        equip: [$item`li'l unicorn costume`],
        familiar: $familiar`Trick-or-Treating Tot`,
        modifier: "adv"
      }
    },
  }
}