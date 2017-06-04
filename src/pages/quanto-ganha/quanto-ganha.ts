import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JaPossuiCreditoPage } from '../ja-possui-credito/ja-possui-credito';
/**
 * Generated class for the QuantoGanhaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quanto-ganha',
  templateUrl: 'quanto-ganha.html',
})
export class QuantoGanhaPage {
  salary: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuantoGanhaPage');
  }

  possuiCredito(){
    this.navCtrl.push(JaPossuiCreditoPage)
  }

}
