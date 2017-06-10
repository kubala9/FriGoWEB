import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AccountService} from "../account.service";
import {LoginModel} from "../../shared/models/account/login.model";
import {NotifierService} from "../../core/notifier.service";

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();

  constructor(
    private accountService: AccountService,
    private notifier: NotifierService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();

    if (!(this.loginModel && this.loginModel.username && this.loginModel.username.length && this.loginModel.password && this.loginModel.password.length)) {
      this.notifier.error('Uzupełnij wszystkie pola!');
    } else {
      this.accountService
          .login(this.loginModel)
          .subscribe(() => {
            this.notifier.success("Zalogowano!");
            this.router.navigate(['/fridge']);
          }, (error) => {
            this.notifier.error(error);
          });
    }
  }
}
