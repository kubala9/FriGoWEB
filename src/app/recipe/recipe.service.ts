import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe/recipe';
import { Observable } from 'rxjs/Observable';
import { RecipesMock } from '../cookbook/recipes.mock';

import 'rxjs/add/observable/of';

@Injectable()
export class RecipeService {
    constructor() { }

    getRecipe(id): Recipe {
        return RecipesMock[id];
    }
}
