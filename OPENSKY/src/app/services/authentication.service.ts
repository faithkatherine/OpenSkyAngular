import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/Http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  loginUrl = 'http://localhost:3000/login'

  getLoginCredentials(credentials:{email:string,password:string}){
    this.httpClient.post(this.loginUrl, credentials)
  }
}
