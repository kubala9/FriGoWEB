import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FridgeComponent } from './fridge/fridge.component';

const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'fridge'
  },
  {
    path: 'fridge',
    component: FridgeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FridgeRoutingModule { }
