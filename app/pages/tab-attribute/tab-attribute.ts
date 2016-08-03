import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tab-attribute/tab-attribute.html',
})
export class TabAttributePage {
  // all attributes
  private attr = {
    category: 1,
    sleeve: '',
    fabric: ''
  }

  constructor(private nav: NavController, private viewCtrl: ViewController) {}

  // close modal
  closeModal() {
    this.nav.pop();
    this.viewCtrl.dismiss(true);
  }
}
