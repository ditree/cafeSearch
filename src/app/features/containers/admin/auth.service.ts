import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  constructor() { }

  login(): Observable<boolean> {
    return Observable.of(true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
