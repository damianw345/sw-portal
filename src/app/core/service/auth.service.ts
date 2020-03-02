import { Injectable } from '@angular/core';
import { UserHttpService } from '../http/user-http.service';
import { LOCAL_STORAGE } from '../../const/local-storage';
import { LoginData } from '../model/login-data';
import Utils from '../../utils';
import { JwtJson } from '../model/jwt-json';
import { map, tap } from 'rxjs/operators';
import { CurrentUser } from '../model/current-user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userHttpService: UserHttpService) {
  }

  authenticate(loginUser: LoginData): Observable<CurrentUser> {

    const currentToken: string = this.getTokenFromStorage();

    if (this.isTokenExpired(currentToken)) {
      return this.userHttpService.fetchUserToken(loginUser).pipe(
        map(tokenJson => tokenJson.token),
        tap(token => this.setTokenInStorage(token)),
        map(token => Utils.getDecodedJwtJson(token)),
        map(decodedToken => this.getCurrentUser(decodedToken))
      );
    }
    return new Observable(observer => {
      observer.next(this.getCurrentUser((Utils.getDecodedJwtJson(currentToken))));
    });
  }

  clearToken(): void {
    localStorage.removeItem(LOCAL_STORAGE.TOKEN);
  }

  getTokenFromStorage(): string | null {
    return localStorage.getItem(LOCAL_STORAGE.TOKEN);
  }

  private setTokenInStorage(token: string): void {
    localStorage.setItem(LOCAL_STORAGE.TOKEN, token);
  }

  private isTokenExpired(token: string) {
    if (token) {
      const jwtJson: JwtJson = Utils.getDecodedJwtJson(token);
      return jwtJson && Date.now() > jwtJson.exp;
    }
    return true;
  }

  private getCurrentUser(jwtJson: JwtJson): CurrentUser {
    return {username: jwtJson.sub, roles: jwtJson.authorities};
  }
}
