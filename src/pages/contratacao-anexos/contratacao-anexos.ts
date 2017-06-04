import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContratacaoDashboardPage } from '../contratacao-dashboard/contratacao-dashboard';

/**
 * Generated class for the ContratacaoAnexosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contratacao-anexos',
  templateUrl: 'contratacao-anexos.html',
})
export class ContratacaoAnexosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratacaoAnexosPage');
  }
  concluir(){
    this.navCtrl.push(ContratacaoDashboardPage);
  }
}
