import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueDaSementeiraPage } from './parque-da-sementeira.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueDaSementeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueDaSementeiraPageRoutingModule {}
