import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuantoGanhaPage } from './quanto-ganha';

@NgModule({
  declarations: [
    QuantoGanhaPage,
  ],
  imports: [
    IonicPageModule.forChild(QuantoGanhaPage),
  ],
  exports: [
    QuantoGanhaPage
  ]
})
export class QuantoGanhaPageModule {}
