import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {ItemPage} from "../item/item";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/wish-list/wish-list.html',
})
export class WishListPage {
  // list items of this category
  private items:any;

  constructor(private nav: NavController, private itemService: ItemService) {
    // get list items
    this.items = itemService.getAll();
  }

  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  // get discount percent
  discountPercent(originPrice, salePrice) {
    return Math.round((salePrice - originPrice) * 100 / originPrice)
  }

  // remove item from wish list
  remove(index) {
    this.items.splice(index, 1);
  }
}
