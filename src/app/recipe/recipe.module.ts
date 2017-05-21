import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';;

import { RecipeRoutingModule } from './recipe-routing.module';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutingModule
  ],
  declarations: [SingleRecipeComponent]
})
export class RecipeModule { }
