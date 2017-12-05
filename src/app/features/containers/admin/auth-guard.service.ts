import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route,
ActivatedRouteSnapshot, RouterStateSnapshot,
CanActivateChild, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }
    this.authService.redirectUrl = url;
    const sessionId = 1234567890;
    //const navigationExtras: NavigationExtras = {
      //queryParams: {'session_id': sessionId},
      //fragment: 'anchor'
    //};

    //this.router.navigate(['/login'], navigationExtras);
    this.router.navigate(['/login']);
    return false;
    //return true;
  }
}
