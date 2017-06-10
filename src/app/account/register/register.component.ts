import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";
import { RegisterModel } from "../../shared/models/account/register.model";
import { NotifierService } from "../../core/notifier.service";

@Component({
  selector: 'fg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel = new RegisterModel();

  constructor(
    private accountService: AccountService,
    private notifier: NotifierService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    if (!(this.registerModel &&
        this.registerModel.username && this.registerModel.username.length &&
        this.registerModel.password && this.registerModel.password.length &&
        this.registerModel.confirmPassword && this.registerModel.confirmPassword.length &&
        this.registerModel.email && this.registerModel.email.length)) {
      this.notifier.error('Uzupełnij wszystkie pola!');
    } else {
      this.accountService
          .register(this.registerModel)
          .subscribe(console.log, console.log); //TODO
      // .subscribe(() => {
      //   this.notifier.success("Zalogowano!");
      //   this.router.navigate(['/fridge']);
      // }, (error) => {
      //   this.notifier.error(error);
      // });
    }
  }
}
