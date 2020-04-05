import { Component } from '@angular/core';
import { UserService } from './core/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sw-portal';

  constructor(public userService: UserService) {
  }

  logout(): void {
    this.userService.logout();
  }
}
