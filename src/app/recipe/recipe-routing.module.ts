import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: ':id',
    component: SingleRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
