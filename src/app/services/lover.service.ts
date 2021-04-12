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
}