import { AuthService } from 'src/app/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Loginmodel = new User('','');

  constructor(private _auth:AuthService,
    private _route: Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this._auth.loginUser(this.Loginmodel).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        console.log(res)
        this._route.navigate(['/home'])
      },
      err => console.log(err)
    )
    console.log(this.Loginmodel)
  }

  loginUser(){
   

   
      localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNjFmNjc1ZWQ3MWQxN2Q3NDk5NmFkMWQwIiwiaWF0IjoxNjQzNTQxOTk3fQ.--qD_1BZZJpNZc1dPH-kJG_lRA4SeOJiPOu2Qtl8zmU")
    
      this._route.navigate(['home'])
    
  }
}
