import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';
import { HttpServerService } from '../../../../core/http-server/http-server.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  loginPromise: any = {};
  user: any = {};

  constructor(private httpServer: HttpServerService) { }

  login(credentials): Observable<boolean> {
    /*const credentials =  {
      username: 'admin',
      password: 'express'
    };*/
    console.log(credentials);
    this.loginPromise = this.httpServer.postHttp('/auth/login', credentials)
    .map((response: Response) => {
      return (<any>response);
      // .map(item => {
      //  return {
       //   token: item.token,
       //   user: item.username
       // };
      // });
    })
    .flatMap(data => {
      this.user = data;
      // console.log('user', this.user);
      this.isLoggedIn = true;
      return Observable.of(true);
    })
    .catch(reason => {
      console.log('login error', reason);
      this.isLoggedIn = false;
      throw Observable.throw(reason);
    });
    return this.loginPromise;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
