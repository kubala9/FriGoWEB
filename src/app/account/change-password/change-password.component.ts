import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";
import { ChangePasswordModel } from "../../shared/models/account/change-password.model";
import { NotifierService } from "../../core/notifier.service";

@Component({
  selector: 'fg-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordModel: ChangePasswordModel = new ChangePasswordModel();

  constructor(
      private accountService: AccountService,
      private notifier: NotifierService,
      private router: Router
  ) { }

  ngOnInit() {
  }


  submit() {

    if (!(this.changePasswordModel &&
        this.changePasswordModel.oldPassword && this.changePasswordModel.oldPassword.length &&
        this.changePasswordModel.newPassword && this.changePasswordModel.newPassword.length &&
        this.changePasswordModel.newPasswordConfirm && this.changePasswordModel.newPasswordConfirm.length)) {
      this.notifier.error('Uzupełnij wszystkie pola!');
    } else {
       this.accountService
           .changePass(this.changePasswordModel)
           .subscribe(console.log, console.log); //TODO
      // .subscribe(() => {
      //   this.notifier.success("Zalogowano!");
      //   this.router.navigate(['/fridge']);
      // }, (error) => {
      //   this.notifier.error(error);
      // });
    }
  }

  logout() {
    this.accountService
        .logout()

    this.notifier.success('Zostałeś wylogowany!');
    this.router.navigate(['/']);
    //@TODO ?
  }

}
