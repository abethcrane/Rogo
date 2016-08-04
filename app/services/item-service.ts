import {Injectable} from "@angular/core";
import {ITEMS} from "./mock-items";

@Injectable()
export class ItemService {
  private items:any;

  constructor() {
    this.items = ITEMS;
  }

  getAll() {
    return this.items;
  }

  getByCategory(catId) {
    let items = [];

    for (let i = 0; i < ITEMS.length; i++) {
      if (ITEMS[i].category_id == catId) {
        items.push(ITEMS[i]);
      }
    }

    return items;
  }

  getItem(id) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === parseInt(id)) {
        return this.items[i];
      }
    }
    return null;
  }

  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
