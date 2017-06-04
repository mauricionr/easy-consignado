import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContratacaoAnalisePage } from './contratacao-analise';

@NgModule({
  declarations: [
    ContratacaoAnalisePage,
  ],
  imports: [
    IonicPageModule.forChild(ContratacaoAnalisePage),
  ],
  exports: [
    ContratacaoAnalisePage
  ]
})
export class ContratacaoAnalisePageModule {}
