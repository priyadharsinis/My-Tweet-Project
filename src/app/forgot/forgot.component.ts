import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  Usermodel = new User('','');
  constructor() { }

  ngOnInit(): void {
  }

}
