import { Component, OnInit } from '@angular/core';
import{Routes,Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import {UserService} from '../users.service'
import {FormBuilder,FormGroup,FormControl, Validators} from '@angular/forms';
import {ReverseString} from '../../pipe'
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
userList:any;
userDetails:FormGroup;

iFilter: any = "";
  constructor(private router:Router,private userService:UserService,private formBuilder:FormBuilder) { 
    this.searchUsers();
    this.userDetails = this.formBuilder.group({
      'name':['',[Validators.required]],
    })
  }

  ngOnInit() {
  }
  navigateToProfile(){
    this.router.navigate(['userprofile'],{queryParams: {id:17185318726}})

  }

  searchUsers(){
    this.userService.searchUsers().subscribe((data)=>{
      console.log(data)
      this.userList = data.message;
    })
  }

}
