import {Component} from '@angular/core';
import {NavController, Tabs, NavParams} from 'ionic-angular';
import {TabFilterPage} from "../tab-filter/tab-filter";
import {TabAttributePage} from "../tab-attribute/tab-attribute";


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-filter/modal-filter.html',
})

export class ModalFilterPage {
  // tabs
  private tabFilter = TabFilterPage;
  private tabAttribute = TabAttributePage;
  private selectedIndex = 0;

  constructor(private nav: NavController, private navParams: NavParams) {
    if (navParams.get('tabName') == 'attribute') {
      this.selectedIndex = 1
    }
  }
}
