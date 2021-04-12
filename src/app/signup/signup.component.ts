import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoverService } from '../services/lover.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  UserName:string='';
  Password:string;
  lover:any;

  constructor(private loveServe:LoverService,private router:Router) { }

  ngOnInit(): void {
  }

  SignUp(){

    console.log(this.UserName);

    this.CheckForLover();

  }

  CheckForLover(){
    this.loveServe.GetLover(this.UserName).subscribe(data=>{
      console.log(data);
      this.lover = data;
      if(this.lover===null){
        console.log('good to signup')
        this.PostLover();
        localStorage.setItem('user',this.UserName);

        this.router.navigateByUrl('/login');
      }
      else{
        console.log('user exists')
        alert('User Name exists please choose a new user name');
      }
    })
  }

  PostLover(){
    this.loveServe.PostLover(this.UserName,this.Password).subscribe(data=>{
      console.log(data);
    })
  }

}
