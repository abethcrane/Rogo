import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, Toast} from 'ionic-angular';

import {ItemService} from '../../services/item-service';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-item-option/modal-item-option.html',
})
export class ModalItemOptionPage {
  // current item
  private item: any;

  constructor(private nav: NavController, private itemService: ItemService, private navParams: NavParams,
              private viewCtrl: ViewController) {
    this.item = navParams.get('item');
    this.item.option_price = 0;
  }

  // choose a option
  chooseOption(optionGroup, option) {
    for (let i = 0; i < optionGroup.options.length; i++) {
      optionGroup.options[i].active = false;
    }

    option.active = true;
    optionGroup.currentOption = option;

    // recalculate price
    this.calculatePrice();
  }

  // calculate item price
  calculatePrice() {
    this.item.option_price = 0;
    for (let i = 0; i < this.item.option_groups.length; i++) {
      if (this.item.option_groups[i].currentOption)
        this.item.option_price +=  this.item.option_groups[i].currentOption.price;
    }
  }

  // add to card
  addCart(item) {
    let toast = Toast.create({
      message: 'Item added to card',
      duration: 500,
      position: 'middle'
    });

    this.nav.present(toast);
  }

  // buy now
  buy(item) {

  }

  // close modal
  closeModal() {
    this.viewCtrl.dismiss(true);
  }
}
