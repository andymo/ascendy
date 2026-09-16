import { Item, takeShop } from "kolmafia";

export function acquire(item: Item, smith: boolean, mall: boolean, qty: number = 1) {
  takeShop(qty, item);
}