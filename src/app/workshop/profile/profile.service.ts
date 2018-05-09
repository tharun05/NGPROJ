import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
 
  constructor(private http: Http, private router: Router) { }
  

}
