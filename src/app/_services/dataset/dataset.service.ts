import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mall_costumer } from 'src/app/module/mall_costumer';

const API_URL = 'http://localhost:5000/costumers';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private http: HttpClient) { }

  public getCostumers(): Observable<mall_costumer[]> {
    return this.http.get<mall_costumer[]>(API_URL);
  }
}
