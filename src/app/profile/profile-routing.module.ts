import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnBoardComponent } from './on-board/on-board.component'

const routes: Routes = [
  {
    path: '',
    component: OnBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
