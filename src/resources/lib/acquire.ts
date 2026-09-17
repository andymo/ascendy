import { Item, retrieveItem } from "kolmafia";

export function acquire(item: Item, smith: boolean, mall: boolean, qty: number = 1) {
  retrieveItem(item, qty);
}