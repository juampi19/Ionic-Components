import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirdPage } from './gird.page';

const routes: Routes = [
  {
    path: '',
    component: GirdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirdPageRoutingModule {}
