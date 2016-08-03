import {Injectable} from "@angular/core";
import {CARTS} from "./mock-carts";

@Injectable()
export class CartService {
  private carts:any;

  constructor() {
    this.carts = CARTS;
  }

  getAll() {
    return this.carts;
  }

  getItem(id) {
    for (var i = 0; i < this.carts.length; i++) {
      if (this.carts[i].id === parseInt(id)) {
        return this.carts[i];
      }
    }
    return null;
  }

  remove(item) {
    this.carts.splice(this.carts.indexOf(item), 1);
  }
}