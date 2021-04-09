import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName:string='UserName Here';
  password:string;

  constructor() { }

  ngOnInit(): void {
  }

  login(){

    console.log(this.UserName+'user');
    console.log(this.password+'password');

  }

}
