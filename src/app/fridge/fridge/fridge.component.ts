import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientQuantity } from '../../shared/models/ingredient-quantity/ingredient-quantity';
import { FridgeService } from '../fridge.service';

import { ProductListComponent } from './../product-list/product-list.component';
import { NewProductComponent } from './../new-product/new-product.component';

@Component({
  selector: 'fg-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.sass']
})

export class FridgeComponent implements OnInit {
  public isPopupVisible="disable";
  
  constructor() {}

  ngOnInit() { }
  
 togglePopupVisibility(e) {
    if(this.isPopupVisible=="enable") {
        this.isPopupVisible='disable';
    } else {
        this.isPopupVisible='enable';
        }
    }
  
}