import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { Bike } from '../bike';

import 'rxjs/add/operator/map';

@Injectable()
export class BikeService {

  private base = '/api/bike';

  constructor(private http: Http) {
  }


  getBike(): Observable<Bike[]>{
    return this.http.get(this.base)
      .map(response => response.json());
  }

  addBike(bike: Bike): Observable<Bike>{ //old
    return this.http.post(this.base, bike) //old
      .map(response => response.json()); //old
  }

  getBikes(): Observable<Bike[]>{
    return this.http.get(this.base) //old
      .map(response => response.json()); //old
  }

  alert(){
    return true
  }
}
