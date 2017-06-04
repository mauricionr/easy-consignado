import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContratacaoAnalisePage} from '../contratacao-analise/contratacao-analise';

/**
 * Generated class for the ContratacaoDashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contratacao-dashboard',
  templateUrl: 'contratacao-dashboard.html',
})
export class ContratacaoDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratacaoDashboardPage');
  }

  enviarParaAnalise(){
    this.navCtrl.push(ContratacaoAnalisePage);
  }

}
