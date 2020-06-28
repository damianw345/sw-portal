import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class OAuth2CallbackResolver implements Resolve<void> {
  constructor(private router: Router,
              private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    const token = route.queryParams.token;
    this.userService.loginWithToken(token);

    this.userService.isLogin$().subscribe(isLogin => {
      if (isLogin) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
