import { Component, OnInit } from '@angular/core';
import {Route,Router,ActivatedRoute} from '@angular/router';

import{ UserService} from '../users.service'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  param:any;
  profileData:any;
  constructor(private userService:UserService) {

  this.param = this.userService.getParams('id')
  this.getUserById(this.param)
  }

  ngOnInit() {
  }
getUserById(id:any){
  this.userService.getById(id).subscribe((data:any)=>{
    console.log(data)
    this.profileData = data.message;
  })
}
}
