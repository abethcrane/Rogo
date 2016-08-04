import {Component} from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {ItemService} from '../../services/item-service';
import {ModalItemOptionPage} from "../modal-item-option/modal-item-option";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/item/item.html',
})
export class ItemPage {
  // item info
  private item: any;

  constructor(private nav: NavController, private itemService: ItemService) {
    // get the first item as sample data
    this.item = itemService.getItem(1);
  }

  // add or remove item on wish list
  toggleWishList (item) {
    item.on_wish_list = !item.on_wish_list;
  }

  // get item options group name
  getOptionGroupsName(item) {
    let optionGroups = [];
    for (let i = 0; i < item.option_groups.length; i++) {
      optionGroups.push(item.option_groups[i].name);
    }

    return optionGroups.join(',');
  }

  // make array with range is n
  range(n) {
    return new Array(n);
  }

  // open item option modal
  showOptions(item) {
    // show modal
    let modal = Modal.create(ModalItemOptionPage, {item: item});

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
}
