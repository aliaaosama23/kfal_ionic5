import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  public myForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.myForm=this.formBuilder.group({
      UserEmail:['',[Validators.required,Validators.email]],
    });
  }

  ngOnInit() {
  }

}
