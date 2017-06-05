import { Component, OnInit } from '@angular/core';
import { NewIngredientQuantity } from '../../shared/models/ingredient-quantity/new-ingredient-quantity';
import { Ingredient } from '../../shared/models/ingredient/ingredient';
import { FridgeService } from '../fridge.service';
import { IngredientService } from '../../core/ingredient.service';

@Component({
  selector: 'fg-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.sass']
})
export class NewProductComponent implements OnInit {
  ingredients: Ingredient[] = [];
  ingredientQuantity = new NewIngredientQuantity();
  private _selectedIngredient: Ingredient;

  constructor(
    private fridge: FridgeService,
    private ingredientsService: IngredientService
  ) { }

  ngOnInit() {
    this.ingredientsService.getIngredients().subscribe(
      ingredients => {this.ingredients = ingredients; console.log(ingredients); console.log(this.ingredients);}
    );
  }

  create() {
    this.fridge.createItem(this.ingredientQuantity)
      .subscribe(console.log, console.log); //TODO
  }

  getUnit() {
    if(this.selectedIngredient)
      return this.selectedIngredient.unit.name;
  }

  get selectedIngredient() {
    return this._selectedIngredient;
  }

  set selectedIngredient(value: Ingredient) {
    this.ingredientQuantity.ingredientId = value.id;
    this._selectedIngredient = value;
  }
}
