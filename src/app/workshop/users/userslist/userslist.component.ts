import { Component, OnInit } from '@angular/core';
import{Routes,Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
userList:any;
  constructor(private router:Router) { 
  }

  ngOnInit() {
  }
  navigateToProfile(){
    this.router.navigate(['userprofile'],{queryParams: {id:17185318726}})

  }

}
