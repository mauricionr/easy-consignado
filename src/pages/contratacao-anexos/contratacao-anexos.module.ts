import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContratacaoAnexosPage } from './contratacao-anexos';

@NgModule({
  declarations: [
    ContratacaoAnexosPage,
  ],
  imports: [
    IonicPageModule.forChild(ContratacaoAnexosPage),
  ],
  exports: [
    ContratacaoAnexosPage
  ]
})
export class ContratacaoAnexosPageModule {}
