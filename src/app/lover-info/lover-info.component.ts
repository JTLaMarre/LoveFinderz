import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoverService } from '../services/lover.service';

@Component({
  selector: 'app-lover-info',
  templateUrl: './lover-info.component.html',
  styleUrls: ['./lover-info.component.css']
})
export class LoverInfoComponent implements OnInit {

  loverName:string;
  User:string;
  Bio:string;
  Sex:string;



  constructor(private router:Router, private service:LoverService) { }

  ngOnInit(): void {
    this.loverName=localStorage.getItem('lover');
    this.User=localStorage.getItem('user');
    if(this.User==null){
      this.router.navigateByUrl('/login');
    }
    this.service.GetLover(this.loverName).subscribe(data=>{
      this.Bio=data.bio;
      this.Sex=data.sex;
    })
  }

}
