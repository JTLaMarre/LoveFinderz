import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'LoveFinderz';
  User:string;

  ngAfterViewChecked(){
    this.User=localStorage.getItem('user');
    console.log(`user:${this.User}`);
  }

  LogOut(){
    localStorage.clear();
    this.User=null;
  }


}
