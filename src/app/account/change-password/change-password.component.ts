import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from "../account.service";
import { NotifierService } from "../../core/notifier.service";

@Component({
  selector: 'fg-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {
    changePassForm : FormGroup;

  constructor(
      private accountService: AccountService,
      private notifier: NotifierService,
      private router: Router,
      private formBuilder: FormBuilder
  ) {
      this.changePassForm = formBuilder.group({
          'OldPassword' : [null, Validators.required],
          'NewPassword' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])],
          'ConfirmPassword' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])],
      });
  }

  ngOnInit() {
  }

  submitForm(value: any):void {
      this.notifier.clearAll();

      this.accountService
          .changePass(value)
          .subscribe(() => {
              this.notifier.success("Zmieniono hasło!");
          }, (error) => {
              this.notifier.error(error);
          });
  }

  logout() {
    this.accountService
        .logout()

    this.notifier.success('Zostałeś wylogowany!');
    this.router.navigate(['/']);
  }

}
