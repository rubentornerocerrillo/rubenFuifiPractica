import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaVacantesPage } from './lista-vacantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaVacantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaVacantesPageRoutingModule {}
