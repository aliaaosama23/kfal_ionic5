import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.page.html',
  styleUrls: ['./code-verification.page.scss'],
})
export class CodeVerificationPage implements OnInit {
  CodeNumber:string;
  constructor(private router:Router) { 
  }

  ngOnInit() {
  }

  VerifyCode(){
    //this.ngOtpInputRef.setValue(333999);//yourvalue can be any string or number eg. 1234 or '1234'
    if(this.CodeNumber.length==6){
      // call api that code verification is ok 
      this.router.navigateByUrl('/main-page'); 
    }
  }

  onOtpChange(codeNumber){
    // console.log(codeNumber)
    // console.log(typeof( codeNumber))
    // console.log(JSON.stringify(codeNumber))
    this.CodeNumber=codeNumber
  }

}
