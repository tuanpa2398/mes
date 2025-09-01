import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUserAuth, LoginData, LoginResponse, SystemUserResponse } from '@app/models/auth.model';
import { ApiResponseData } from '@app/models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: AppUserAuth | null = null;
  
  REFRESH_TOKEN: string = "refresh_token";
  ACCESS_TOKEN: string = "access_token";

  private prefixApi = `/auth`

  constructor(
    private httpClient: HttpClient
  ) { }

  login(data: LoginData){
    return this.httpClient.post<ApiResponseData>(`${this.prefixApi}/login`, data);
  }

  refreshToken(){
    return this.httpClient.post<ApiResponseData>(`${this.prefixApi}/refresh-token`, {
      refreshToken: this.getRefreshToken()
    });
  }

  getCurrentAppUser(){
    return this.httpClient.get<ApiResponseData>('/user/get-current-user');
  }

  logout(){
    this.clearUserAuthen();
    this.clearToken();
  }

  clearUserAuthen(){
    this.user = null;
  }

  clearToken(){
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.ACCESS_TOKEN);
  }

  store(data: LoginResponse){
    localStorage.setItem(this.REFRESH_TOKEN, data.refresh_token);
    localStorage.setItem(this.ACCESS_TOKEN, data.access_token);

    this.user = data.user;
  }

  storeUser(data: SystemUserResponse){
    this.user = data.user;
  }

  getAccessToken(){
    return localStorage.getItem(this.ACCESS_TOKEN) ?? null;
  }

  getRefreshToken(){
    return localStorage.getItem(this.REFRESH_TOKEN) ?? null;
  }

  getCurrentUser(){
    return this.user;
  }

}
