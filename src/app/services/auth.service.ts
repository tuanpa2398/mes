import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUserAuth, LoginData, LoginResponse } from '@app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: AppUserAuth | null = null;

  constructor(private httpClient: HttpClient) { }

  login(data: LoginData){
    return this.httpClient.post('/auth/login', data);
  }

  refreshToken(){
    return this.httpClient.post('/auth/login/refresh-token', {
      refreshToken: localStorage.getItem("refresh_token") ?? null
    });
  }

  logout(){
    this.clearUserAuthen();
    this.clearToken();
  }

  clearUserAuthen(){
    this.user = null;
  }

  clearToken(){
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
  }
}
