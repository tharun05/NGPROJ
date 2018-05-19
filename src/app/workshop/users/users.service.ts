import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
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
  constructor(private http:Http) {
  }
  searchUsers():Observable<any>{
    this.url = this.host + 'users'
   return this.http.get(this.url).map(res=>{
     return res.json();
   })
  }

}