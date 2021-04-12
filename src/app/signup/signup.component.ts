import { Component, OnInit } from '@angular/core';
import { Lover } from '../Models/Lover';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  UserName:string='';
  Password:string;

  constructor() { }

  ngOnInit(): void {
  }

  SignUp(){

    console.log(this.UserName);
    console.log(this.Password);
  }

}
