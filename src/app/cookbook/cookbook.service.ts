import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe/recipe';
import { Tag } from '../shared/models/tag';
import { Observable } from 'rxjs/Observable';
import { RecipesMock } from './recipes.mock';
import { TagsMock } from './tags.mock';
import { ApiService } from '../core/api.service';
import { endpoints } from '../shared/endpoints';

import 'rxjs/add/observable/of';
import {PromiseObservable} from "rxjs/observable/PromiseObservable";

@Injectable()
export class CookbookService {
  private _recipes: Recipe[];
  private _tags: Tag[];

  constructor(
      private api: ApiService
  ) { }


  getRecipes(): Observable<Recipe[]> {
    if(this._recipes){
      return Observable.of(this._recipes);
    }
    else
      return this.api.get(endpoints.ingredients)
          .do(recipes => this._recipes = recipes);
  }

  getTags(): Observable<Tag[]> {
    if(this._tags){
      return Observable.of(this._tags);
    }
    else
      return this.api.get(endpoints.tags)
          .do(tags => this._tags = tags)
  }
}
