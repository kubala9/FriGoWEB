import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleModule } from './example/example.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './example/example.module#ExampleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
