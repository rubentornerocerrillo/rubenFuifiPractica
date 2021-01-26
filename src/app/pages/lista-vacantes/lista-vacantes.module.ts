import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaVacantesPageRoutingModule } from './lista-vacantes-routing.module';

import { ListaVacantesPage } from './lista-vacantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaVacantesPageRoutingModule
  ],
  declarations: [ListaVacantesPage]
})
export class ListaVacantesPageModule {}
