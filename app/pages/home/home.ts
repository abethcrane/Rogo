import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryService} from '../../services/category-service';
import {ItemService} from '../../services/item-service';
import {CategoriesPage} from "../categories/categories";
import {CategoryPage} from "../category/category";
import {ItemPage} from "../item/item";
import {SearchPage} from "../search/search";
import {CartPage} from "../cart/cart";


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  // list slides for slider
  private slides = [
    {
      src: 'img/slide_1.jpg'
    },
    {
      src: 'img/slide_2.jpg'
    },
    {
      src: 'img/slide_3.jpg'
    }
  ];

  // list categories
  private categories: any;

  // list of items
  private items: any;

  constructor(private nav: NavController, private categoryService: CategoryService, private itemService: ItemService) {
    this.categories = categoryService.getAll();

    this.items = itemService.getAll();
  }

  // view categories
  viewCategories() {
    this.nav.push(CategoriesPage);
  }

  // view a category
  viewCategory(catId) {
    this.nav.push(CategoryPage, {id: catId});
  }

  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  // go to search page
  goToSearch() {
    this.nav.push(SearchPage);
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
  }
}
