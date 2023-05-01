import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserData } from './iuser-data';
import { IloginData } from './ilogin-data';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  username = new BehaviorSubject<string>('');
  userdata = new BehaviorSubject(null);
  constructor(private HttpClient:HttpClient ,  private _router:Router){ 
   
    if(localStorage.getItem('token')!= null){
      this.saveUserData();
    }

  }
 SignUp(UserInformation:IUserData):Observable<any>
 {
  return this.HttpClient.post('https://route-movies-api.vercel.app/signup',UserInformation)
 }

 LoginIn(LoginInformation:IloginData):Observable<any>
 {
  return this.HttpClient.post('https://route-movies-api.vercel.app/signin',LoginInformation)
 }

 logOut(){
  localStorage.removeItem('token');
  this._router.navigateByUrl('/login')
  this.userdata.next(null);
 }

  saveUserData(){
    let endecodetoken = JSON.stringify(localStorage.getItem('token'))
    let decodedtoken:any = jwtDecode(endecodetoken);
    this.userdata.next(decodedtoken)  ;
    console.log(this.userdata)
  }
  
  






}
