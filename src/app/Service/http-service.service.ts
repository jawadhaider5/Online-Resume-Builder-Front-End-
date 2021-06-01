import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  /*public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });*/
  constructor(private http: HttpClient) { }
  
  get(path:any) : Observable<any>{
    return this.http.get(path);
  }
  post(path:any, data:any): Observable<any>{
    return this.http.post<any>(path, data);
  }  
}