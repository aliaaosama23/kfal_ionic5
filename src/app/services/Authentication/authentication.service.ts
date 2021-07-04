import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../Helper/helper.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http:HttpClient,private helper:HelperService) { }

  //  normal user: create new user and type is 1 => 
  SignUp(params){
      return this.http.get(
        this.helper.BaseUrl+'User/Registraion?Name='+params.Name
        +"&Email="+params.UserEmail+
        "&Password="+params.Password+
        "&UserType=1"+
        "&Gender="+params.Gender+
        "&Mobile="+params.Mobile);
  }

  login(params,DeviceID){
    return   this.http.get(this.helper.BaseUrl+"User/Login?Email="+params.UserEmail+"&Password="+params.Password+"&DeviceID="+DeviceID) 
  }
  
  CompleteRegistration(UserID,CountryID,CityID,Address,Age){
      return   this.http.get(this.helper.BaseUrl+"User/CompleteRegistration?UserID="+UserID+"&CountryID="+CountryID+"&CityID="+CityID+"&Address="+Address+"&Age="+Age+"&Lat=10&Long=20")
  }

  CheckVerificationEmailCode(UserEmail ,Code){
      return   this.http.get(this.helper.BaseUrl+"User/CheckVerificationEmailCode?Email="+UserEmail +"&VerificationCode="+Code )
  }

  SendForgetPassword(Email){  
      return   this.http.get(this.helper.BaseUrl+"User/SendForgetPassword?Email="+Email)
  }

  ConfirmResetPassword(params){
      return   this.http.get(this.helper.BaseUrl+"User/ConfirmResetPassword?Email="+params.Email+"&VerficationCode="+params.VerficationCode+"&NewPassword="+params.NewPassword)
  }

}
