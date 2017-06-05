import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FridgeRoutingModule } from './fridge-routing.module';
import { FridgeComponent } from './fridge/fridge.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FridgeService } from './fridge.service';
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
  imports: [
    SharedModule,
    FridgeRoutingModule,
    NgxDatatableModule
  ],
  declarations: [FridgeComponent, ProductListComponent, AddProductComponent, NewProductComponent],
  providers: [FridgeService]
})
export class FridgeModule { 


}
