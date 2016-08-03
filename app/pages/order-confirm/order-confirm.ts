import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {CartService} from '../../services/cart-service';
import {HomePage} from "../home/home";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/order-confirm/order-confirm.html',
})
export class OrderConfirmPage {
  private cart: any;


  constructor(private nav: NavController, private cartService: CartService) {
    // set cart data
    this.cart = cartService.getAll();
  }

  // place order
  buy() {

    // back to home page
    this.nav.setRoot(HomePage);
  }
}
