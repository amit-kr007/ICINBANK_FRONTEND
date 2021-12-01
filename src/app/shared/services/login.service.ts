import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,private jwtHelper :JwtHelperService) { }

  getToken(userName: String, password: string): Observable<any> {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  const params={
      username:userName,
      password:password
    }
    const helper = new JwtHelperService();
    return this.httpClient.post<any>(`${"http://localhost:8080" + '/create_token'}`,  JSON.stringify(params), { headers: reqHeaders }).pipe(map(res => {
      console.log(res);
      localStorage.setItem('token',res.jwt);
      localStorage.setItem('user_id', res.user.id);
      localStorage.setItem('user_role', res.user.userRole);
      const decodedToken = helper.decodeToken(res.jwt);
      console.log(decodedToken);
      return res;
    }
    ))



  }
  login(username: String, password: string): Observable<any> {
    return this.getToken(username, password);
  }
}
