import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  
  getAllUsers():Observable<any>
  {
    console.log(localStorage.getItem('token'));
    const tokenType  = 'Bearer ';
      let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization',tokenType + localStorage.getItem('token'));
      console.log(reqHeaders);
      return this.httpClient.get<any>(`${"http://localhost:8080" + '/admin/profiles'}`, { headers: reqHeaders })
  }
}
