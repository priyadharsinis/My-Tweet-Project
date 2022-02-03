import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Usermodel = new User('','');
  constructor(private _auth: DataService, private _route: Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._auth.registerUser(this.Usermodel).subscribe(
    
        res => {
          localStorage.setItem('token', res.token)
          console.log(res)
          this._route.navigate(['/events'])
        },
      err => console.log(err)
    )
  
    
    //console.log(this.email, this. password)
  }

}
