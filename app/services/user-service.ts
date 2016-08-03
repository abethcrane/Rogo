import {Injectable} from "@angular/core";
import {USERS} from "./mock-users";

@Injectable()
export class UserService {
  private users:any;

  constructor() {
    this.users = USERS;
  }

  getAll() {
    return this.users;
  }

  getItem(id) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === parseInt(id)) {
        return this.users[i];
      }
    }
    return null;
  }

  remove(item) {
    this.users.splice(this.users.indexOf(item), 1);
  }
}