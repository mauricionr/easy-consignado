import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContratacaoDashboardPage } from './contratacao-dashboard';

@NgModule({
  declarations: [
    ContratacaoDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ContratacaoDashboardPage),
  ],
  exports: [
    ContratacaoDashboardPage
  ]
})
export class ContratacaoDashboardPageModule {}
