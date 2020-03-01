import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginData } from '../model/login-data';
import { CurrentUser } from '../model/current-user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSub = new BehaviorSubject<CurrentUser>(null);
  currentUser$: Observable<CurrentUser> = this.currentUserSub.asObservable();

  constructor(private authService: AuthService) {
  }

  login(loginData: LoginData): void {
    this.authService.authenticate(loginData).subscribe(currentUser => {
      this.currentUserSub.next(currentUser);
    });
  }

  logout(loginData: LoginData): void {
    this.currentUserSub.next(null);
    this.authService.clearToken();
  }

  isLogin$(): Observable<boolean> {
    return this.currentUser$.pipe(
      map(currentUser => !!currentUser)
    );
  }
}
