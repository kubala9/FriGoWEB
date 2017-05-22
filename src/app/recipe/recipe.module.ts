import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RecipeRoutingModule } from './recipe-routing.module';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutingModule
  ],
  declarations: [ SingleRecipeComponent, CreateComponent ],
  exports: [ CreateComponent ]
})
export class RecipeModule { }
