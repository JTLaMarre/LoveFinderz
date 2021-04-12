import { Component, OnInit } from '@angular/core';
import { LoverService } from '../services/lover.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserName:string;
  Sex:string;
  Bio:string;
  Lover:string;
  LastLoved:Date;

  constructor(private service:LoverService) { }

  ngOnInit(): void {
    this.UserName=localStorage.getItem('user');
    this.service.GetLover(localStorage.getItem('user')).subscribe(data=>{
      this.Bio=data.bio;
      this.Sex=data.sex;
    })
  }

  SaveSexBio(){
    console.log(this.Bio);
    this.service.upDateSexBio(this.UserName,this.Sex,this.Bio).subscribe(data=>{
      console.log(data);
    })
  }

}

