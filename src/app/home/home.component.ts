import { DataService } from './../data.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';
  Usermodel = new User('','');
  public User = "p";
  constructor(public _snackBar: MatSnackBar,
              public userservice: DataService) { }

  ngOnInit(): void {
    this.User = this.userservice.getList();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, panelClass :['red-snackbar'],
    });
  }
}


