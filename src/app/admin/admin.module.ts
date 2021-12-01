import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ChequeComponent } from './cheque/cheque.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [AdminHomeComponent,
    ChequeComponent,
    UserAccountComponent,
    AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
  ]
})
export class AdminModule { }
