import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Unit } from '../shared/models/unit/unit';
import { Observable } from 'rxjs';
import { endpoints } from '../shared/endpoints';

@Injectable()
export class UnitService {
  private _units: Unit[];

  constructor(private api: ApiService) { }

  getUnits(): Observable<Unit[]> {
    if(this._units)
      return Observable.of(this._units);
    else
      return this.api.get(endpoints.units)
        .do(units => this._units = units);
  }
}
