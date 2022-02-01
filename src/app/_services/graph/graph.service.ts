import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { graph } from 'src/app/module/graph';

const API_URL = 'http://localhost:5000/graphs';
@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }

  getGraphs(): Observable<any> {
    return this.http.get(API_URL);
  }
}
