import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleModule } from './example/example.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './example/example.module#ExampleModule'
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'fridge',
    loadChildren: './fridge/fridge.module#FridgeModule'
  },
  {
    path: 'cookbook',
    loadChildren: './cookbook/cookbook.module#CookbookModule'
  },
  {
    path: 'recipe',
    loadChildren: './recipe/recipe.module#RecipeModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
