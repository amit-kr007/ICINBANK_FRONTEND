import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor( private httpClient:HttpClient,private userService:UserService) { 

  }

  ngOnInit(): void {
    console.log("user Account");
      this.userService.getAllUsers().subscribe(res=>{
        console.log(res);
      })
  }

}
