import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getToken(userName: String, password: string): Observable<any> {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  const params={
      username:userName,
      password:password
    }
    return this.httpClient.post<any>(`${"http://localhost:8080" + '/create_token'}`,  JSON.stringify(params), { headers: reqHeaders }).pipe(map(res => {
      console.log(res);
    }
    ))



  }
  login(username: String, password: string): Observable<any> {
    return this.getToken(username, password);
  }
}
