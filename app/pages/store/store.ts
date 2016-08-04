import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {StoreService} from '../../services/store-service';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/store/store.html',
})
export class StorePage {

  constructor(private nav: NavController, private storeService: StoreService) {}
}