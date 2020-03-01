import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../model/login-data';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpClient: HttpClient) {
  }

  fetchUserToken(loginDto: LoginData): Observable<Token> {
    return this.httpClient.post<Token>('api/users/login', loginDto);
  }
}
