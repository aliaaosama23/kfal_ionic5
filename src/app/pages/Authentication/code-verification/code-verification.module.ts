import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeVerificationPageRoutingModule } from './code-verification-routing.module';

import { CodeVerificationPage } from './code-verification.page';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  imports: [
    NgOtpInputModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CodeVerificationPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CodeVerificationPage]
})
export class CodeVerificationPageModule {}
