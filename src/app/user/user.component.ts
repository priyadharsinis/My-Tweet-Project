import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,
    private notifierservice: DataService) { }

  ngOnInit(): void {
    this._snackBar
  }
 // Snackbar that opens with success background
openSuccessSnackBar(){
  this._snackBar.open("Login Successful", "OK", {
    duration: 3000,
    panelClass: ['green-snackbar', 'login-snackbar'],
   });
  }
  //Snackbar that opens with failure background
  openFailureSnackBar(){
  this._snackBar.open("Invalid Login Credentials", "Try again!", {
    duration: 3000,
    panelClass: ['red-snackbar','login-snackbar'],
    });
   }
}
