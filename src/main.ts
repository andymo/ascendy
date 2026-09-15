import { Args } from "grimoire-kolmafia";
import { abort, currentRound, handlingChoice, print, visitUrl } from "kolmafia";
import { ascendyOptions, supportedPaths, AscensionPath, Lifestyle } from "./config";

function showHelp(): void {
    Args.showHelp(ascendyOptions);
    print("Supported paths and their aliases:\n");
    print(supportedPaths.join("\n"));
}

function checkFree(): void {
  // Yoinked from garbo
  visitUrl("main.php");
  if (currentRound() > 0) {
    abort(
      "In the middle of combat, aborting.",
    );
  }
  if (handlingChoice()) {
    abort(
      "In the middle of a choice adventure, arborting.",
    );
  }
}

function getPath(): void {
  
}

export function main(argString = ""): void {
  Args.fill(ascendyOptions, argString);

  if (ascendyOptions.help) {
    return showHelp();
  }

  switch (ascendyOptions.command.toLocaleLowerCase()) {
    case "ascend":
      checkFree();
      return;
    
    case "sim":
      return;
    
    case "gash":
      return;
    
    case "bedtime":
      checkFree();
      return;
    
    default:
      showHelp();
      abort(`Unknown command "${ascendyOptions.command}"`);
  }
}
