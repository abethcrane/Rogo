import {Injectable} from "@angular/core";
import {STORES} from "./mock-stores";

@Injectable()
export class StoreService {
  private stores:any;

  constructor() {
    this.stores = STORES;
  }

  getAll() {
    return this.stores;
  }

  getItem(id) {
    for (var i = 0; i < this.stores.length; i++) {
      if (this.stores[i].id === parseInt(id)) {
        return this.stores[i];
      }
    }
    return null;
  }

  remove(item) {
    this.stores.splice(this.stores.indexOf(item), 1);
  }
}