import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from '../home/home';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private nav: NavController) {}

  // go to register page
  register() {
    this.nav.push(RegisterPage);
  }

  // go to home page
  login() {
    this.nav.setRoot(HomePage);
  }
}
