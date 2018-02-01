import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from './auth.response';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public authenticateUser(username, password): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>('/api/login', {
      username: username,
      password: password
    });
  }
}
