import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JaPossuiCreditoPage } from './ja-possui-credito';

@NgModule({
  declarations: [
    JaPossuiCreditoPage,
  ],
  imports: [
    IonicPageModule.forChild(JaPossuiCreditoPage),
  ],
  exports: [
    JaPossuiCreditoPage
  ]
})
export class JaPossuiCreditoPageModule {}
