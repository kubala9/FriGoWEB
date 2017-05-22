import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';;

import { CookbookRoutingModule } from './cookbook-routing.module';
import { CookbookComponent } from './cookbook/cookbook.component';

@NgModule({
  imports: [
    SharedModule,
    CookbookRoutingModule
  ],
  declarations: [CookbookComponent]
})
export class CookbookModule { }
