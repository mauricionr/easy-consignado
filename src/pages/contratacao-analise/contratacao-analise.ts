import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimuladorPage } from '../simulador/simulador';

/**
 * Generated class for the ContratacaoAnalisePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contratacao-analise',
  templateUrl: 'contratacao-analise.html',
})
export class ContratacaoAnalisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratacaoAnalisePage');
  }

  inicio(){
    this.navCtrl.setRoot(SimuladorPage);
  }

}
