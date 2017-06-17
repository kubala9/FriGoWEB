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
        RecipesMock.forEach((element) => {
            if (element.id === id) {
                this._recipe = element;
            }
        });

        return Observable.of(this._recipe);
    }
            // return this.api.get(endpoints.recipes + '/' + id)
            //     .do(recipe => {
            //         this._recipe = recipe;
            //     });
}
