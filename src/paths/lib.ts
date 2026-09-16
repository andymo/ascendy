import { abort, Path } from "kolmafia";
import { AscendyPath, AscensionPath } from "../resources/core/path";
import { NonePath } from "./0_none/path";
import { UnderTheSeaPath } from "./55_under_the_sea/path";
import { $path } from "libram";


// works only if AscendyPath isn't abstract
export const pathMap: Map<AscensionPath, typeof AscendyPath> = new Map([
  [AscensionPath.NONE, NonePath],
  [AscensionPath.UNDER_THE_SEA, UnderTheSeaPath]
])

// I'm not intelligent enough for a map I guess because I wanted the Path to be abstract
export function getAscendyPath(path: AscensionPath | Path): AscendyPath {
  switch (path) {
    case AscensionPath.NONE:
    case $path`none`:
      return new NonePath();

    case AscensionPath.UNDER_THE_SEA:
    case $path`11,037 Leagues Under the Sea`:
      return new UnderTheSeaPath();

    default:
      abort(`Unsupported path ${path}`)
  }
}