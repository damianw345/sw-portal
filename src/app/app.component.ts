import { Component, OnInit } from '@angular/core';
import { UserService } from './core/service/user.service';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public userService: UserService,
              private authService: AuthService) {
  }

  logout(): void {
    this.userService.logout();
  }

  ngOnInit(): void {
    const token = this.authService.getTokenFromStorage();
    if (token) {
      this.userService.loginWithToken(token);
    }
  }
}
