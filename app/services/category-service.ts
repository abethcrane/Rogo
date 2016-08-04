import {Injectable} from "@angular/core";
import {CATEGORIES} from "./mock-categories";

@Injectable()
export class CategoryService {
  private categories:any;

  constructor() {
    this.categories = CATEGORIES;
  }

  getAll() {
    return this.categories;
  }

  getItem(id) {
    for (var i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === parseInt(id)) {
        return this.categories[i];
      }
    }
    return null;
  }

  remove(item) {
    this.categories.splice(this.categories.indexOf(item), 1);
  }
}