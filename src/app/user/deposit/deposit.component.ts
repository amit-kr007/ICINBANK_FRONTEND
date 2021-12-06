import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccountService } from 'src/app/shared/services/user-account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  depositForm!: FormGroup;
  countries = [
    { id: 1, name: "primary" },
    { id: 2, name: "savings" }
  ];
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private userAccountService: UserAccountService) {
    this.depositForm = this.formBuilder.group({
      accountType: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit(): void {

  }
  get f() { return this.depositForm.controls; }
  error:boolean=false;
  deposit() {
    console.log(this.f.accountType, this.f.amount);
    this.submitted = true;
    if(this.f.accountType.errors)
    {
      this.error=true;
      console.log("error");
    }
    
    
    console.log("error");
    if (this.depositForm.invalid) {
      return;

    }

    console.log("error");
    console.log(this.f.accountType.value, this.f.amount);
    if (this.f.accountType.value=="1") {
        this.userAccountService.depositInUserPrimaryAccount(this.depositForm.value.amount).subscribe(res=>{
          console.log(res);
        });
    }
    else{
      this.userAccountService.depositInUserSavingsAccount(this.depositForm.value.amount).subscribe(res=>{
        console.log(res);
      });;

      
    }
  }



}
