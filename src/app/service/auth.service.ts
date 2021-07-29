import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  public username = '' ;
  public password = '' ;

  constructor(private http: HttpClient,private apiService:ApiService) {

  }


  authenticationService(username: string, password: string) {
    console.log(this.apiService.loginUser(username, password));
    return this.apiService.loginUser(username, password);
  }

  // logout() {
  //   sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  //   this.username = null;
  //   this.password = null;
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
