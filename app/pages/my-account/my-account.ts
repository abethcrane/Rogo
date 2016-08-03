import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {UserService} from '../../services/user-service';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/my-account/my-account.html',
})
export class MyAccountPage {

  constructor(private nav: NavController, private userService: UserService) {}
}