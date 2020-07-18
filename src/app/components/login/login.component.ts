import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user.service';
import { LoginData } from '../../core/model/login-data';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/http/registration.service';
import { tap } from 'rxjs/operators';
import { OAuthRedirectionUrlService } from '../../core/http/o-auth-redirection-url.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private registrationService: RegistrationService,
              private router: Router,
              public oAuthRedirectionUrlService: OAuthRedirectionUrlService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  loginWithPassword(): void {
    if (this.loginForm.valid) {
      // use email as username
      this.userService.login(this.buildLoginData());
      this.userService.isLogin$().subscribe(isLogin => {
        if (isLogin) {
          this.router.navigate(['']);
        }
      });
    }
  }

  register(): void {
    if (this.loginForm.valid) {
      this.registrationService.register(this.buildLoginData())
        .pipe(
          tap(registration => {
            this.loginWithPassword();
          })
        ).subscribe();
    }
  }

  private buildLoginData(): LoginData {
    return {username: this.loginForm.value.email, password: this.loginForm.value.password};
  }
}
