import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleVacantePage } from './detalle-vacante.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleVacantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleVacantePageRoutingModule {}
