import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SimuladorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-simulador',
  templateUrl: 'simulador.html',
})
export class SimuladorPage {
  continue: boolean = false;
  amount: number = 0;
  periodo: number = 18;
  taxas: any = {
    itau: 1.89,
    caixa: 1.97,
    bradesco: 1.91,
    santander: 1.76
  }

  selectedBank: string = 'santander'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calc(taxa){
    return this.amount * Math.pow((1 + (taxa/100)), this.periodo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimuladorPage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

}
