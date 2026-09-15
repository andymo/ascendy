import { Outfit, OutfitSpec } from "grimoire-kolmafia"
import { print } from "kolmafia";
import { $familiar, $item } from "libram";

export class AscendyPath {
  constructor() {}

  nightcap(): void {
    print("No nightcap defined, not nightcapping.");
  }

  jammies(): void {
    const spec: OutfitSpec = {
      equip: [$item`li'l unicorn costume`],
      familiar: $familiar`Trick-or-Treating Tot`,
      modifier: "adv"
    }
    const outfit = new Outfit();
    if (!outfit.equip(spec)) {
      throw "Unable to equip all jammies, check familiar and stuff"
    }
    outfit.dress();
  }

  bedtime(): void {
    this.nightcap();
    this.jammies();
  }
}