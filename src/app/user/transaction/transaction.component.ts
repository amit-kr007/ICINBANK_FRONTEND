import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/shared/services/user-account.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private userAccountService:UserAccountService) { }
  transactions:any;
  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions()
  {
    this.userAccountService.getTransactionsHistory().subscribe(res=>{
      console.log(res);
      this.transactions=res;
    })
  }

}
