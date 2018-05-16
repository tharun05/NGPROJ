import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Props } from '../apex/common/props'

@Injectable()
export class AuthService {
  private host = Props.API_END_POINT;
  private url: string = '';
  baseUrl: string;
  constructor(private http: Http, private router: Router, private activatedroute: ActivatedRoute) {

  }
  
 login(data:any):Observable<any>{
   this.url = this.host+ 'log' 
   return this.http.post(this.url,data)
   .map(res=>{
     return res.json();
   })
 }
  
 register(data:any):Observable<any>{
  this.url = this.host+ 'register' 
  return this.http.post(this.url,data)
  .map(res=>{
    return res.json();
  })
}
}