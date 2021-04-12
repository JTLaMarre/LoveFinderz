import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'LoveFinderz';
  User:string;

  constructor(private router:Router){
  }

  ngAfterViewChecked(){
    this.User=localStorage.getItem('user');
    console.log(`user:${this.User}`);
  }

  LogOut(){
    localStorage.clear();
    this.User=null;
    this.router.navigateByUrl('/')
  }


}
