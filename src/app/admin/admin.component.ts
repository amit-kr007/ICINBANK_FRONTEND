import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.setItem('token',"");
    localStorage.setItem('user_id', "");
    localStorage.setItem('user_role', "");
    console.log("logOut");
    this.router.navigate(['login']);

  }
  getUserAccounts()
  {
    console.log("getUserAccounts");
    this.router.navigate(['admin/users']);
  }
  getChequeBookRequest()
  {
    console.log("getChequeBookRequest");
    this.router.navigate(['admin/cheque']);
  }

}
