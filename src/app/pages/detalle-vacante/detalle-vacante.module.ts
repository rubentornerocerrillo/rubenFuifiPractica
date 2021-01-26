import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleVacantePageRoutingModule } from './detalle-vacante-routing.module';

import { DetalleVacantePage } from './detalle-vacante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleVacantePageRoutingModule
  ],
  declarations: [DetalleVacantePage]
})
export class DetalleVacantePageModule {}
