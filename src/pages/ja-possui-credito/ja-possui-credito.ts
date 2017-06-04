import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContratacaoDetalhePage} from '../contratacao-detalhe/contratacao-detalhe';
/**
 * Generated class for the JaPossuiCreditoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ja-possui-credito',
  templateUrl: 'ja-possui-credito.html',
})
export class JaPossuiCreditoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JaPossuiCreditoPage');
  }

  possuiCredito(possui){
    this.navCtrl.push(ContratacaoDetalhePage);
  }

}
