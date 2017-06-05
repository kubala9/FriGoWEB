import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe/recipe';
import { Tag } from '../shared/models/tag';
import { Observable } from 'rxjs/Observable';
import { RecipesMock } from './recipes.mock';
import { TagsMock } from './tags.mock';

import 'rxjs/add/observable/of';

@Injectable()
export class CookbookService {
  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return Observable.of(RecipesMock);
  }

  getTags(): Observable<Tag[]> {
    return Observable.of(TagsMock);
  }
}
