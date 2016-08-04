import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from "../register/register";


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/welcome/welcome.html',
})
export class WelcomePage {

  constructor(private nav: NavController) {}

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  // go to register page
  register() {
    this.nav.push(RegisterPage);
  }
}
