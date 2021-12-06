import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private userService:UserService) {
    this.user=this.userService.getUser();
   }
user:any;
primaryBalance:string|null="";
savingsBalance:string|null="";
primaryAccountNo:string|null="";
savingsAccountNo:string|null="";
  ngOnInit(): void {
    console.log(localStorage.getItem('primaryBalance'));
    
      this.primaryBalance=localStorage.getItem('primaryBalance');
      this.savingsBalance=localStorage.getItem('savingsBalance');
      this.primaryAccountNo=localStorage.getItem('primaryAccountNo');
      this.savingsAccountNo=localStorage.getItem('savingsAccountNo');
      console.log(this.primaryBalance);
    
    
  }

}
