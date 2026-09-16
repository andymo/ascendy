import { Path, toPath } from "kolmafia";
import { AscendyPath, GashConfig } from "../../resources/core/path";
import { $class, $item, Lifestyle } from "libram";

export class UnderTheSeaPath extends AscendyPath {
  path: Path = toPath(55);
  ascensionConfig: GashConfig = {
    playerClass: $class`Pastamancer`,
    lifestyle: Lifestyle.softcore,
    deli: $item`astral six-pack`,
    pet: $item`astral pet sweater`,
    moon: "gnomish gnomads camp",
  }
}