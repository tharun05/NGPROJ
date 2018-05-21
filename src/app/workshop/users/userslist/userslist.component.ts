import { Component, OnInit } from '@angular/core';
import{Routes,Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import {UserService} from '../users.service'

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
userList:any;
userData:any;
  constructor(private router:Router, private userService: UserService) { 
    this.getUsers();
  }

  ngOnInit() {
  }

getUsers(){
  this.userService.searchUsers().subscribe((data:any)=>{
    if(data){
      this.userData = data.message;

    }
  })
}
navigateToProfile(user:any){
this.router.navigate(['userprofile'],{queryParams :{id:user._id}})
}
}
