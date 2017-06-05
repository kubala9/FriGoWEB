import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientQuantity } from '../../shared/models/ingredient-quantity/ingredient-quantity';
import { FridgeService } from '../fridge.service';

import { ProductListComponent } from './../product-list/product-list.component';
import { AddProductComponent } from './../add-product/add-product.component';

@Component({
  selector: 'fg-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.sass']
})

export class FridgeComponent implements OnInit {
  public product: IngredientQuantity[] = [];

  
  constructor(private router: Router,
    private fridge: FridgeService) {}

  ngOnInit() {
  this.fridge.getIngredientQuantity().subscribe(
      product => this.product = product,
      error => console.log(error)
      );
  }
  
  
  public my_Class = 'disable';
  
  onClick(){
        
        if(this.my_Class=="enable"){
            this.my_Class='disable';
        }else{
            this.my_Class='enable';
        }
    }
}