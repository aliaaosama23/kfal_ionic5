import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HelperService {
 
  BaseUrl:string='https://kfal.careofme.net/TranslationAppAPI/';
  
  constructor(private http:HttpClient) { }

 
 
  
}
