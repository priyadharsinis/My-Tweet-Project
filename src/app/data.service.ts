import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _registerURL = "http://localhost:3000/api/register"
  private _loginURL = "http://localhost:3000/api/login"
  

  constructor(private http: HttpClient
    ,private snackBar: MatSnackBar,
    private _route : Router) { }

  getList(){
    let user1 = "priya";
    return user1;
  
  }


  registerUser(user: User){
    return this.http.post<any>(this._registerURL, user)
    
 }

  loginUser(user: any){
    return this.http.post<any>(this._loginURL, user)

  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    this._route.navigate(['login'])
  }

  OpenSnackBar(){
    this.snackBar.open('Hi','hello',({
      duration: 5000,
      horizontalPosition: 'center',
    verticalPosition: 'bottom'
      })); 
  }
}
