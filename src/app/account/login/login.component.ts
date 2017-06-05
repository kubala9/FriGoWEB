import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { UserService } from '../../core/user.service';
import { LoginModel } from '../../shared/models/account/login.model';
import { NotifierService } from '../../core/notifier.service';

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();

  constructor(
    private accountService: AccountService,
    private notifier: NotifierService
  ) { }

  ngOnInit() {
  }

  login() {
    this.accountService
      .login(this.loginModel)
      .subscribe(() => {
        this.notifier.success("Zalogowano!");
      }, (error) => {
        this.notifier.error(error);
      });
  }
}
