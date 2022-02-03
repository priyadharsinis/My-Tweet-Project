import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _registerURL = "http://localhost:3000/api/register"
  private _loginURL = "http://localhost:3000/api/login"
  
  constructor(private http: HttpClient) { }

 // registerUser(user){
  //  return this.http.post<any>(this._registerURL, user)
    
 // }

  loginUser(user: User){
    return this.http.post<any>(this._loginURL, user)

  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token')
  }
}
