import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { RegisterModel } from '../../shared/models/account/register.model';

@Component({
  selector: 'fg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel = new RegisterModel();

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  register() {
    this.accountService
      .register(this.registerModel)
      .subscribe(console.log, console.log); //TODO
  }
}
