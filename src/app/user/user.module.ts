import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { TransferComponent } from './transfer/transfer.component';
import { RequestComponent } from './request/request.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserComponent,
    UserHomeComponent,
    TransferComponent,
    RequestComponent,
    DepositComponent,
    WithdrawComponent,
    TransactionComponent,],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class UserModule { }
