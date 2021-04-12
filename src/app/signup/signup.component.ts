import { Component, OnInit } from '@angular/core';
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

  constructor(private loveServe:LoverService) { }

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
      }
      else{
        console.log('user exists')
      }
    })
  }

}
