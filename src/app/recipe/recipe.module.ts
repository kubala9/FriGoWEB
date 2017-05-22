import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RecipeRoutingModule } from './recipe-routing.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutingModule
  ],
  declarations: [CreateComponent],
  exports: [ CreateComponent ]
})
export class RecipeModule { }
