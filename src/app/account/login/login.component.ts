import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { UserService } from '../../core/user.service';
import { LoginModel } from '../../shared/models/account/login.model';

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  login() {
    this.accountService
      .login(this.loginModel)
      .subscribe(console.log, console.log); //TODO
  }
}
