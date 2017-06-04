import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ContratacaoAnexosPage } from '../contratacao-anexos/contratacao-anexos';
import {ContratacaoDashboardPage } from '../contratacao-dashboard/contratacao-dashboard';

/**
 * Generated class for the ContratacaoDetalhePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contratacao-detalhe',
  templateUrl: 'contratacao-detalhe.html',
})
export class ContratacaoDetalhePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratacaoDetalhePage');
  }
  contratacaoAnexos(){
    this.navCtrl.push(ContratacaoDashboardPage);
  }
}
