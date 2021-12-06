import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAccountService } from 'src/app/shared/services/user-account.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  transactionForm: FormGroup;
  accountType: string[] = ['PRIMARY', 'SAVINGS'];
  default: string = 'PRIMARY';
  submitted: boolean = false;
  constructor(private userAccountService:UserAccountService) {
    this.transactionForm = new FormGroup({
      account: new FormControl(null),
      amount:new FormControl(null,[Validators.required, Validators.pattern("^[0-9]*$")]),
      accountNo:new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{16}$")]),
      receiverUsername:new FormControl(null,[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    });
    this.transactionForm.controls['account'].setValue(this.default, {onlySelf: true});
    
   }

  ngOnInit(): void {
  }
  transfer()
  {
    this.submitted=true;
    console.log(this.transactionForm.value);
    if (this.transactionForm.invalid) {
      return;
    }
    this.userAccountService.transferMoney(this.transactionForm.value.amount,
                                        this.transactionForm.value.accountNo,
                                        this.transactionForm.value.receiverUsername,
                                        this.transactionForm.value.account).subscribe(res=>{
                                          console.log(res);
                                        })
  }
  get f() { return this.transactionForm.controls; }

}
