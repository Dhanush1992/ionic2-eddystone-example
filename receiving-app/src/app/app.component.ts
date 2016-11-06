import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages';

declare var evothings: any;

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then((readySource) => {
      if (readySource !== 'cordova') return;
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
