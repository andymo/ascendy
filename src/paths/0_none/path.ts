import { Path } from "kolmafia";
import { AscendyPath, AscendyPathConfig } from "../../resources/core/path";
import { $class, $familiar, $item, $path, Lifestyle } from "libram";

export class NonePath extends AscendyPath {
  path: Path = $path`none`
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
    diet: {
      nightcap: $item`emergency margarita`,
      nightcapStooper: $item`meadeorite`,
    },
    bedtime: {
      jammiesSpec: {
        // pants have +10 fam weight rollover bonus
        equip: [$item`li'l unicorn costume`, $item`ratskin pajama pants`],
        familiar: $familiar`Trick-or-Treating Tot`,
        modifier: "adv"
      },
      campground: {
        maid: $item`clockwork maid`
      }
    },
  }
}