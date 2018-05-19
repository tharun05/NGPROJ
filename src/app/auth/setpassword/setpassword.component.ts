import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { SetPassword } from '../../apex/entities/setpassword.entity';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.scss']
})
export class SetpasswordComponent implements OnInit {
  SetPasswordForm: any;
  setpassword:any;
  successMessage:string;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) {
    this.setpassword = new SetPassword();

    this.SetPasswordForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmpassword': ['', Validators.required],
     });
   }

  ngOnInit() {
  }

  setpswrd(){
    this.authService.setPassword(this.setpassword).subscribe((data:any)=>{
      console.log(data)
      if(data.status === 'success'){
        this.router.navigate(['signin'])
      this.successMessage = data.message;
        
      }
      else {
        this.successMessage = "invalid password"
      }
    })
  }
}
