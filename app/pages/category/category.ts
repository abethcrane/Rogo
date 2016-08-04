import {Component} from '@angular/core';
import {NavController, ActionSheet, Modal} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {CategoryService} from '../../services/category-service';
import {ModalFilterPage} from "../modal-filter/modal-filter";
import {ItemPage} from "../item/item";
import {CartPage} from "../cart/cart";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/category/category.html',
})
export class CategoryPage {
  // list items of this category
  private items:any;

  // category info
  private category:any;

  // view type
  private viewType = 'list';

  // sort by
  private sortBy = 'Best Match';

  constructor(private nav:NavController, private itemService:ItemService, private categoryService:CategoryService) {
    // get list items of a category as sample
    this.items = itemService.getByCategory(1);

    // set category info
    this.category = categoryService.getItem(1);
  }

  // switch to list view
  viewList() {
    this.viewType = 'list';
  }

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }

  // get discount percent
  discountPercent(originPrice, salePrice) {
    return Math.round((salePrice - originPrice) * 100 / originPrice)
  }

  // choose sort by
  chooseSortBy() {
    let actionSheet = ActionSheet.create({
      buttons: [
        {
          text: 'Best Match',
          handler: () => {
            this.sortBy = 'Best Match';
          }
        },
        {
          text: 'Lowest Price First',
          handler: () => {
            this.sortBy = 'Lowest Price First';
          }
        },
        {
          text: 'Highest Price First',
          handler: () => {
            this.sortBy = 'Highest Price First';
          }
        },
        {
          text: 'No. of orders',
          handler: () => {
            this.sortBy = 'No. of orders';
          }
        },
        {
          text: 'Seller Rating',
          handler: () => {
            this.sortBy = 'Seller Rating';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    this.nav.present(actionSheet);
  }

  // show filter modal
  openFilter(tabName) {
    // show modal
    let modal = Modal.create(ModalFilterPage, {tabName: tabName});

    // listen for modal close
    modal.onDismiss(confirm => {
      if (confirm) {
        // apply filter here
      } else {
        // do nothing
      }
    });

    this.nav.present(modal);
  }

  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
  }
}
