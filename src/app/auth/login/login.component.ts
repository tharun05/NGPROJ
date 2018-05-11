import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators} from '@angular/forms';
import {Login} from '../../apex/entities/login.entity';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDetails:FormGroup;
  loginInfo:Login = new Login();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor( private authService:AuthService,private formBuilder:FormBuilder) { 
    this.userDetails = this.formBuilder.group({
      'email':['',[Validators.required,Validators.pattern(this.emailPattern)]],
      'password':['',[Validators.required,Validators.minLength(5)]]
    })
  }

  ngOnInit() {
  }

login(){
  console.log(this.userDetails.value)
  console.log(this.loginInfo)
  this.authService.login(this.loginInfo).subscribe((response)=>{
    console.log(response)
  })
}
}
