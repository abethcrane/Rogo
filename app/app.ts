import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';

// import services
import {CategoryService} from './services/category-service';
import {ItemService} from './services/item-service';
import {UserService} from './services/user-service';
import {StoreService} from './services/store-service';
import {CartService} from './services/cart-service';
import {OrderService} from './services/order-service';
import {NewsService} from './services/news-service';
// end import services

// import pages
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {WelcomePage} from './pages/welcome/welcome';
import {RegisterPage} from './pages/register/register';
import {MyAccountPage} from './pages/my-account/my-account';
import {CartPage} from './pages/cart/cart';
import {SettingsPage} from './pages/settings/settings';
import {CurrencyConverterPage} from './pages/currency-converter/currency-converter';
import {ItemPage} from './pages/item/item';
import {StorePage} from './pages/store/store';
import {OrderConfirmPage} from './pages/order-confirm/order-confirm';
import {CategoriesPage} from './pages/categories/categories';
import {CategoryPage} from './pages/category/category';
import {ModalFilterPage} from './pages/modal-filter/modal-filter';
import {TabFilterPage} from './pages/tab-filter/tab-filter';
import {TabAttributePage} from './pages/tab-attribute/tab-attribute';
import {Item} from "ionic-angular/index";
import {ModalItemOptionPage} from './pages/modal-item-option/modal-item-option';
import {SearchPage} from './pages/search/search';
import {WishListPage} from './pages/wish-list/wish-list';
// end import pages

@Component({
  templateUrl: 'build/app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  private rootPage:any;

  private nav:any;

  private pages = [
    {
      title: 'Home',
      icon: 'ios-home-outline',
      count: 0,
      component: HomePage
    },

    {
      title: 'Categories',
      icon: 'ios-list-box-outline',
      count: 0,
      component: CategoriesPage
    },

    {
      title: 'WishList',
      icon: 'md-heart-outline',
      count: 2,
      component: WishListPage
    },

    {
      title: 'My Account',
      icon: 'ios-contact-outline',
      count: 0,
      component: MyAccountPage
    },

    {
      title: 'Cart',
      icon: 'ios-cart-outline',
      count: 1,
      component: CartPage
    },

    {
      title: 'Settings',
      icon: 'ios-settings-outline',
      count: 0,
      component: SettingsPage
    },

    {
      title: 'Logout',
      icon: 'log-out',
      count: 0,
      component: LoginPage
    },
    // import menu


  ];

  constructor(private platform:Platform) {
    this.rootPage = WelcomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [CategoryService, ItemService, UserService, StoreService, CartService, OrderService, NewsService, /* import services */])
