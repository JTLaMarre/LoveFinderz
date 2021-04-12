import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoverService } from '../services/lover.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName:string='UserName Here';
  password:string;
  User:string;




  constructor(private router:Router, private service:LoverService) { }

  ngOnInit(): void {
  this.User=localStorage.getItem('user');

  console.log(this.User)

  if(this.User!=null){
    this.router.navigateByUrl('/profile');
  }

  }

  login(){
    this.service.GetLover(this.UserName).subscribe(data=>{
      if(this.password==data.password)
      {
        localStorage.setItem('user',this.UserName);
        this.router.navigateByUrl('/profile');
      }
      else{
        alert('name or password does not match our records');
      }

    });
    if(localStorage.getItem('user')!=null){


    }
    console.log(this.UserName+'user');
    console.log(this.password+'password');



  }

}
