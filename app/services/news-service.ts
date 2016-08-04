import {Injectable} from "@angular/core";
import {NEWSS} from "./mock-newss";

@Injectable()
export class NewsService {
  private newss:any;

  constructor() {
    this.newss = NEWSS;
  }

  getAll() {
    return this.newss;
  }

  getItem(id) {
    for (var i = 0; i < this.newss.length; i++) {
      if (this.newss[i].id === parseInt(id)) {
        return this.newss[i];
      }
    }
    return null;
  }

  remove(item) {
    this.newss.splice(this.newss.indexOf(item), 1);
  }
}