import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Observable, Subject } from 'rxjs';
import { NewIngredientQuantity } from '../shared/models/ingredient-quantity/new-ingredient-quantity';
import { IngredientQuantity } from '../shared/models/ingredient-quantity/ingredient-quantity';
import { endpoints } from '../shared/endpoints';
import 'rxjs/add/observable/of';

@Injectable()
export class FridgeService {
  private fridgeContentSource = new Subject<IngredientQuantity[]>();
  frigeContent$ = this.fridgeContentSource.asObservable();

  constructor(
    private api: ApiService
  ) { }

  fetchFridgeContent(): void {
    this.api.get(endpoints.ingredientQuantity).subscribe(
      (next) => this.fridgeContentSource.next(next),
      (error) => this.fridgeContentSource.error(error)
    );
  }

  createItem(ingredientQuantity: NewIngredientQuantity): Observable<IngredientQuantity> {
    return this.api.post(endpoints.ingredientQuantity, ingredientQuantity).do(() => {
      this.fetchFridgeContent();
    });
  }

  delete(toDelete: IngredientQuantity[]): Observable<null> {
    if(toDelete && toDelete.length > 0) {
      let observable = this.api.delete(endpoints.ingredientQuantity + '/' + toDelete[0].id);
      for(let i = 0; i < toDelete.length - 1; i++) {
        observable = observable.flatMap(
          () => this.api.delete(endpoints.ingredientQuantity + '/' + toDelete[i + 1].id)
        );
      }
      return observable.do(() => this.fetchFridgeContent());
    } else {
      return Observable.of(null);
    }
  }
}
