import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  passwordType:string='password';
  passwordIcon:string='eye-off-outline';
  
  ConfirmpasswordType:string='password';
  ConfirmpasswordIcon:string='eye-off-outline';
  myForm:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder) { 

    this.myForm=this.formBuilder.group({
      UserEmail:['',[Validators.required,Validators.email]],
      Name:['',Validators.required],
      Mobile:['',Validators.required],
      Password:['',[Validators.required,Validators.minLength(6)]],
      ConfirmPassword:['',[Validators.required,Validators.minLength(6)]],
      //Gender:['',Validators.required],
      agree:['',Validators.required]
    });
  }

  ngOnInit() {
  }

  ShowHidePassword(){
    this.passwordType= this.passwordType === 'text' ? 'password' :'text';
    this.passwordIcon= this.passwordIcon === 'eye-outline' ? 'eye-off-outline' :'eye-outline';   
 }

 ShowHideConfirmPassword(){
  this.ConfirmpasswordType= this.ConfirmpasswordType === 'text' ? 'password' :'text';
  this.ConfirmpasswordIcon= this.ConfirmpasswordIcon === 'eye-outline' ? 'eye-off-outline' :'eye-outline';
 }

 Login(){
   this.router.navigate(['/login']);
 }

 VerifyCode(){
  this.router.navigate(['/code-verification']);
 }
}
