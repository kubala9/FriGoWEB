import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [ChangePasswordComponent]
})
export class AccountModule { }
