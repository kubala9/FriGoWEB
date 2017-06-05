import { Component, OnInit } from '@angular/core';
import { FridgeService } from '../fridge.service';
import { IngredientQuantity } from '../../shared/models/ingredient-quantity/ingredient-quantity';

@Component({
  selector: 'fg-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  rows: IngredientQuantity[] = [];
  selected = [];

  constructor(
    private fridge: FridgeService
  ) { }

  ngOnInit() {
    this.fridge.frigeContent$
      .subscribe(content => {
        this.rows = content
      });
    this.fridge.fetchFridgeContent();
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  delete() {
    this.fridge.delete(this.selected.splice(0))
      .subscribe(console.log, console.log); //TODO
  }
}
