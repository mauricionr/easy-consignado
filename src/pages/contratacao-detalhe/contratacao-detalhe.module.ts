import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContratacaoDetalhePage } from './contratacao-detalhe';

@NgModule({
  declarations: [
    ContratacaoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ContratacaoDetalhePage),
  ],
  exports: [
    ContratacaoDetalhePage
  ]
})
export class ContratacaoDetalhePageModule {}
