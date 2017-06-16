import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe/recipe';
import { Observable } from 'rxjs/Observable';
import { RecipesMock } from '../cookbook/recipes.mock';
import { endpoints } from '../shared/endpoints';
import { ApiService } from '../core/api.service';

import 'rxjs/add/observable/of';

@Injectable()
export class RecipeService {
    private _recipe: Recipe;

    constructor(
        private api: ApiService
    ) { }

    getRecipe(id): Observable<Recipe> {
        if(this._recipe)
            return Observable.of(this._recipe);
        else
            return this.api.get(endpoints.recipes + '/' + id)
                .do(recipe => {
                    this._recipe = recipe;
                });
    }
}
