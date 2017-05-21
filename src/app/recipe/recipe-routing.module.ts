import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

const routes: Routes = [
  {
    path: 'single-recipe',
    component: SingleRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
