import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../model/registration';
import { Observable } from 'rxjs';
import { LoginData } from '../model/login-data';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private endpoint = 'api/users/register';

  constructor(private http: HttpClient) {
  }

  public register(loginData: LoginData): Observable<Registration> {
    return this.http.post<Registration>(this.endpoint, {...loginData});
  }
}
