import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';;

import { CookbookRoutingModule } from './cookbook-routing.module';
import { CookbookComponent } from './cookbook/cookbook.component';
import { RecipeTileComponent } from './recipe-tile/recipe-tile.component';

@NgModule({
  imports: [
    SharedModule,
    CookbookRoutingModule
  ],
  declarations: [CookbookComponent, RecipeTileComponent],
})
export class CookbookModule { }
