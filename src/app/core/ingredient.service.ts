import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Ingredient } from '../shared/models/ingredient/ingredient';
import { Observable } from 'rxjs/Observable';
import { endpoints } from '../shared/endpoints';

@Injectable()
export class IngredientService {
  private _ingredients: Ingredient[];

  constructor(private api: ApiService) { }

  getIngredients(): Observable<Ingredient[]> {
    if(this._ingredients)
      return Observable.of(this._ingredients);
    else
      return this.api.get(endpoints.ingredients)
        .do(ingredients => this._ingredients = ingredients);
  }
}
