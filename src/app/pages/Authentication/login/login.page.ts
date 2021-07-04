import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  public myForm:FormGroup;
  passwordType:string='password';
  passwordIcon:string='eye-off-outline';
  private DeviceId='';
  constructor(private router:Router,private formBuilder:FormBuilder,
              private authService:AuthenticationService) { 
                  this.myForm=this.formBuilder.group({
                    UserEmail:['',[Validators.required,Validators.email]],
                    Password:['',[Validators.required,Validators.minLength(6)]]
                  });
  }

  ngOnInit() {
    //this.GetDeviceID();
  }

  ForgetPassword(){
    this.router.navigate(['/forget-password'])
    console.log('go forget password page')
  }

  ShowHidePassword(){
     this.passwordType= this.passwordType === 'text' ? 'password' :'text';
     this.passwordIcon= this.passwordIcon === 'eye-outline' ? 'eye-off-outline' :'eye-outline';   
  }

  SignUp(){
    this.router.navigate(['/register']);
  }

  GetDeviceID(){
    
      
  }

  Login(){
   // if(this.myForm.valid){
      //alert('udid is '+ this.device.uuid);
      this.authService.login(this.myForm.value,this.DeviceId)
      .subscribe(
        (res:any)=>{
        console.log('login res : '+JSON.stringify(res));
        
      },(err:any)=>{
        console.log('login err : '+JSON.stringify(err));
      })
    //}
  }
}
