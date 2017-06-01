import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FridgeRoutingModule } from './fridge-routing.module';
import { FridgeComponent } from './fridge/fridge.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  imports: [
    SharedModule,
    FridgeRoutingModule,
    NgxDatatableModule
  ],
  declarations: [FridgeComponent, ProductListComponent]
})
export class FridgeModule { }
