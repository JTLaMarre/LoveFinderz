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
  Lovers:Array<any>;
  constructor(private service:LoverService) { }

  ngOnInit(): void {
    this.UserName=localStorage.getItem('user');
    this.service.GetLover(localStorage.getItem('user')).subscribe(data=>{
      this.Bio=data.bio;
      this.Sex=data.sex;
      this.Lover=data.lovername;
    })
    this.service.GetLovers().subscribe(data=>{
      this.Lovers=data;
      console.log(this.Lovers);
      let rando = this.Lovers[Math.floor(Math.random() * this.Lovers.length)];
      console.log(rando);
      if(rando.userName!=this.UserName){
        alert('NEW MATCH');
        this.Lover=rando.userName;
        this.SetLover(rando.userName);
      }
      else{
        alert('No new matches');

      }
    })

  }
  SetLover(lovername:string){
    this.service.updateLover(this.UserName,lovername).subscribe(data=>console.log(data));
  }
  SaveSexBio(){
    console.log(this.Bio);
    this.service.upDateSexBio(this.UserName,this.Sex,this.Bio).subscribe(data=>{
      console.log(data);
    })
  }
  ViewMatch(){
    localStorage.setItem('lover',this.Lover);
    console.log(this.Lover);
  }

}

