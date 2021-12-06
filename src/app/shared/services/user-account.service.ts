import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private httpClient:HttpClient) { }

  depositInUserPrimaryAccount(amount:number):Observable<any>
  {
      console.log(localStorage.getItem('user_id'));
      console.log(amount);
      let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      const body={
        amount:amount,
        id:localStorage.getItem('user_id')
      }
     return this.httpClient.post<any>(`${"http://localhost:8080" + '/user/deposit/primary'}`,body, { headers: reqHeaders })
  }
  depositInUserSavingsAccount(amount:number):Observable<any>
  {
      console.log(localStorage.getItem('user_id'));
      console.log(amount);
      let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      const body={
        amount:amount,
        id:localStorage.getItem('user_id')
      }
     return this.httpClient.post<any>(`${"http://localhost:8080" + '/user/deposit/savings'}`,body, { headers: reqHeaders })
 
  }

  requestChequeBook(accountType:string):Observable<any>
  {
   
       let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
       const body={
        accountType:accountType,
        userId:localStorage.getItem('user_id')
      }
       return this.httpClient.post<any>(`${"http://localhost:8080" + '/user/request/checkbook'}`,body, { headers: reqHeaders })

  }
  checkPrimaryAccountStatus():Observable<any>
  {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const userId=localStorage.getItem('user_id')
    return this.httpClient.get<any>(`${"http://localhost:8080" + '/user/checkbook/status/primary/'+userId}`, { headers: reqHeaders })
  }
  checkSavingsAccountStatus():Observable<any>
  {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const userId=localStorage.getItem('user_id')
    return this.httpClient.get<any>(`${"http://localhost:8080" + '/user/checkbook/status/savings/'+userId}`, { headers: reqHeaders })
  }

  getTransactionsHistory():Observable<any>
  {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const userId=localStorage.getItem('user_id')
    return this.httpClient.get<any>(`${"http://localhost:8080" + '/user/transactions/'+userId}`, { headers: reqHeaders })
  
  }

  transferMoney(amount:Number,receiverAccountNo:string,receiverUsername:string,senderAccountType:string):Observable<any>
  {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const body={
      amount:amount,
      senderId:localStorage.getItem('user_id'),
      receiverAccountNo:receiverAccountNo,
      receiverUsername:receiverUsername,
      senderAccountType:senderAccountType
     
   }
    return this.httpClient.post<any>(`${"http://localhost:8080" + '/user/transfer'}`,body, { headers: reqHeaders })

  }

}
