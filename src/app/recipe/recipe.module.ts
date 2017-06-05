import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RecipeRoutingModule } from './recipe-routing.module';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { CreateComponent } from './create/create.component';
import { RecipeService } from './recipe.service';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutingModule
  ],
  declarations: [ SingleRecipeComponent, CreateComponent ],
  exports: [ CreateComponent ],
  providers: [ RecipeService ]
})
export class RecipeModule { }
