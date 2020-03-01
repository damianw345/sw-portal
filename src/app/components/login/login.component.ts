import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user.service';
import { LoginData } from '../../core/model/login-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      // use email as username
      const loginData: LoginData = {username: this.loginForm.value.email, password: this.loginForm.value.password};
      this.userService.login(loginData);
      this.userService.isLogin$().subscribe(isLogin => {
        if (isLogin) {
          this.router.navigate(['']);
        }
      });
    }
  }

}
