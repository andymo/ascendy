import { Path } from "kolmafia";
import { AscendyPath, AscendyPathConfig } from "../../resources/core/path";
import { $class, $item, $path, Lifestyle } from "libram";

export class UnderTheSeaPath extends AscendyPath {
  path: Path = $path`11,037 Leagues Under the Sea`;
  // this should complete regularly in one day, so no bedtime or nightcap configuration
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
    bedtime: {},
  }
}