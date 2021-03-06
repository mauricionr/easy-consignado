import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirstRunPage } from '../pages/pages';
import { ContratacaoDashboardPage } from '../pages/contratacao-dashboard/contratacao-dashboard'
import { SimuladorPage } from '../pages/simulador/simulador'

import { Settings } from '../providers/providers';
import { TranslateService } from '@ngx-translate/core'

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Painel</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
    <ion-list>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/ana.png">
        </ion-avatar>
        <h2>Ana</h2>
        <p>Professora, Escola municipal de piquete</p>
      </ion-item>
    </ion-list>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Dashboard', component: ContratacaoDashboardPage },
    { title: 'Simulador', component: SimuladorPage },
  ]

  constructor(private oneSignal: OneSignal, private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.oneSignal
        .startInit('8888c742-3570-483c-acd1-9061e7eb877c', '482941778795')
        .endInit();

    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('pt-br');

    this.translate.use('pt-br'); // Set your language here

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
