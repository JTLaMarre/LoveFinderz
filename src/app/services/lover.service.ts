import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoverService {

  baseUrl:string='https://localhost:5001/';

  constructor(private http:HttpClient) { }

  GetLover(User:string){
    return this.http.get<any>(`${this.baseUrl}Lovers/${User}`)
  }
  GetLovers(){
    return this.http.get<any>(`${this.baseUrl}Lovers`)
  }
  PostLover(User:string,Password:string){
    return this.http.post<any>(`${this.baseUrl}Lover/${User}/${Password}`,{UserName:User,Password:Password});
  }
  upDateSexBio(User:string,Sex:string,Bio:string){
    return this.http.put<any>(`${this.baseUrl}Lovers/${User}/${Sex}/${Bio}`,null)
  }
  updateLover(User:string,Lover:string){
    return this.http.put<any>(`${this.baseUrl}Lovers/${User}/${Lover}`,null)
  }
}
