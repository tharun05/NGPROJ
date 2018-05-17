import { Component, OnInit } from '@angular/core';
import {Register} from '../../apex/entities/register.entity'
import {FormBuilder,FormGroup,FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register:Register = new Register();
  userDetails:FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
workstatus = [
  {'value':'Employee',viewValue:'Employee'},
  {'value':'Student',viewValue:'Student'},
  {'value':'Others',viewValue:'Others'}
]
technologies = [
  {value:'Front End',viewValue:'Front End Dev'},
  {value:'Backend End',viewValue:'Back End Dev'},
  {value:'DevOps',viewValue:'DevOps'},
  {value:'BlockChain',viewValue:'BlockChain Dev'},
  {value:'Python',viewValue:'Python Dev'},
  {value:'Design',viewValue:'Design Dev'}
]
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { 
    this.userDetails = this.formBuilder.group({
      'firstName':['',Validators.required],
      'lastName':['',Validators.required],
      'email':['',[Validators.required,Validators.pattern(this.emailPattern)]],
      'mobile':['',[Validators.required]],
      'workingStatus':[''],
      'interestedTech':['']

    })
  }

  ngOnInit() {
  }
 

  onSubmit(){
    this.authService.register(this.register).subscribe((data:any)=>{
      if(data){
        this.router.navigate(['signin'],null);

      }
    })

  }
}
