import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe/recipe';
import { Observable } from 'rxjs/Observable';
import { RecipesMock } from './recipes.mock';

@Injectable()
export class CookbookService {
  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return Observable.of(RecipesMock);
  }
}
