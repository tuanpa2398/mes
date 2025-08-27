import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUserAuth, LoginData } from '@app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: AppUserAuth | null = null;

  constructor(private httpClient: HttpClient) { }

  login(data: LoginData){
    return this.httpClient.post('/auth/login', data);
  }
}
