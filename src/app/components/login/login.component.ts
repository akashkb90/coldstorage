import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  email:string;
  password:string;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router) {
      this.loginForm=this.formBuilder.group({ 
        email:["",Validators.required],
        password:["",Validators.required]
      })

     }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.email,this.password).then(result=>{
      this.router.navigate(["/"]);
    },err=>{
      this.router.navigate(["/login"]);
    })
  }


}
