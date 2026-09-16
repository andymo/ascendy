import { drink, Item, itemAmount, print } from "kolmafia";
import { acquire } from "./acquire";
import { getRemainingLiver } from "libram";

export function drinkSafely(item: Item, opts?: {craft?: boolean, buy?: boolean, qty?: number, overdrink?: boolean}): boolean {
  let chugged = 0;
  const qty = opts ? opts.qty ?? 1 : 1;
  const craft = opts ? opts.craft ?? false: false;
  const buy = opts ? opts.buy ?? false: false;
  const overdrink = opts ? opts.overdrink ?? false: false;

  while (chugged < qty) {
    if (itemAmount(item) <= 0) {
      acquire(item, craft, buy);
    }

    if ((getRemainingLiver() - item.inebriety < 0) && !overdrink) {
      print("Something messed up and we were about to overdrink.");
      return false;
    }

    drink(item);
    chugged += 1;
  }

  return true;
}