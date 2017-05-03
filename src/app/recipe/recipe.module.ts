import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';;

import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutingModule
  ],
  declarations: []
})
export class RecipeModule { }
