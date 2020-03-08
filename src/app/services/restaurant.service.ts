import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private readonly http: HttpClient) { }

  public getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>('http://starlord.hackerearth.com/TopRamen');
  }
}
