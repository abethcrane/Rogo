import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/register/register.html',
})
export class RegisterPage {

  constructor(private nav: NavController) {}

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  // go to home page
  register() {
    this.nav.setRoot(HomePage);
  }
}
