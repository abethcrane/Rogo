import {Injectable} from "@angular/core";
import {ORDERS} from "./mock-orders";

@Injectable()
export class OrderService {
  private orders:any;

  constructor() {
    this.orders = ORDERS;
  }

  getAll() {
    return this.orders;
  }

  getItem(id) {
    for (var i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id === parseInt(id)) {
        return this.orders[i];
      }
    }
    return null;
  }

  remove(item) {
    this.orders.splice(this.orders.indexOf(item), 1);
  }
}