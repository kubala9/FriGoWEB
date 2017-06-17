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

    // removeNote(id): void {
    //     this.api.delete(endpoints.notes + `/${id}`)
    //         .do(response => {
    //             console.log(response);
    //         })
    // }

    // editNote(id, editRecipeNote) : void {
    //     this.api.put(
    //         endpoints.notes,
    //         `id=${id}&editRecipeNote=${editRecipeNote}`
    //     ).do(response => { console.log(response) })}

    removeComment(id) : Observable<string> {
        return this.api.delete(
            endpoints.comments + `/${id}`
        ).do(status => {return Observable.of(status)});
    }

    editComment(id, editComment) : Observable<Comment> {
        return this.api.put(
            endpoints.comments,
            `id=${id}&editComment=${editComment}`
        ).do(comment => { return Observable.of(comment); })
    }

    rate(id, rateRecipe) : Observable<number> {
        return this.api.put(
            endpoints.rate,
            `id=${id}&rateRecipe=${rateRecipe}`
        )
            .do(
                response => {
                    return Observable.of(response)
                }
            )
    }
}
