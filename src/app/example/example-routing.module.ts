import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { IdComponent } from './id/id.component';
import { ExampleComponent } from './example/example.component';

import { LoggedInGuard } from '../core/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [ LoggedInGuard ]
  },
  {
    path: ':id',
    component: IdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
