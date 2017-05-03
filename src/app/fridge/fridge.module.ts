import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';;

import { FridgeRoutingModule } from './fridge-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FridgeRoutingModule
  ],
  declarations: []
})
export class FridgeModule { }
