import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { LoginModel } from '../shared/models/account/login.model';
import { LoggedInResponse } from '../shared/models/account/logged-in.response';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  authHeaders = new Headers();

  constructor() {
    const token = localStorage.getItem('token');
    if(token)
      this.setAuthToken(token);
  }

  onLoggedIn(loggedInResponse: LoggedInResponse) {
    this.setAuthToken(loggedInResponse.access_token);
  }

  setAuthToken(token: string) {
    this.authHeaders.set('Authorization', 'Bearer ' + token);
    localStorage.setItem('token', token);
  }

  logout() {
    this.authHeaders = new Headers();
    localStorage.removeItem('token');
  }
}
