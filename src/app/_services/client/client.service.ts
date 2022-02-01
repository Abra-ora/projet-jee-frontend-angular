import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'src/app/module/user';

const API_URL = 'http://localhost:8080/api/clients/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }

  onUpdateClient(user: user): Observable<user>{
    return this.http.put<user>(API_URL+'update',user);
  }

  public onDeleteClient(id: number): Observable<void> {
    return this.http.delete<void>(API_URL+'delete'+'/'+id);
  }

}
