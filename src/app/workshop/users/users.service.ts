import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Props } from '../../apex/common/props';

@Injectable()
export class UserService {
  private host = Props.API_END_POINT;
  private url: string = '';
  baseUrl: string;
  userDetails: any;
  token: string;
  constructor(private http:Http, private activatedRoute:ActivatedRoute,private router:Router) {
  }
  searchUsers(){
    this.url=this.host+ "users"
    return this.http.get(this.url).map(res=>{
      return res.json();
    })
  }
  getParams(key:any){
   return this.activatedRoute.snapshot.queryParams[key]
  }
  getById(id:any){
    this.url = this.host + 'details?id=' +id;
    return this.http.get(this.url).map(res=>{
      return res.json()
    })
  }
}