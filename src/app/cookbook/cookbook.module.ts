import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';;

import { CookbookRoutingModule } from './cookbook-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CookbookRoutingModule
  ],
  declarations: []
})
export class CookbookModule { }
