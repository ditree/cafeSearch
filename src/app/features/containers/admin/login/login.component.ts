import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(public authService: AuthService, public router: Router,
  private fb: FormBuilder) {

   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'userCtrl': new FormControl('', [
        Validators.required
        ]),
        'paswCtrl': new FormControl('', [
        Validators.required
      ])
    });
  }

  login(form) {

    // console.log(form.value.paswCtrl);
    const credentials = {
      username: form.value.userCtrl,
      password: form.value.paswCtrl
    };
    this.authService.login(credentials).subscribe(() => {

      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

}
