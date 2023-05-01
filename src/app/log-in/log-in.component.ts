import { Component } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loading:boolean= false;
  submitShow:boolean= true;
constructor(private UserInfoService:UserInfoService , private Router:Router){
  if(localStorage.getItem('token') != null){
    this.Router.navigateByUrl('/home')
  }
  else{
    this.Router.navigateByUrl('login')
  }
}
LoginForm:FormGroup = new FormGroup({
  'email': new FormControl('' , [Validators.required , Validators.email]),
  'password': new FormControl('' , [Validators.required , Validators.pattern(/^[a-z][0-9]{3}$/)])
})
LoginFormSubmit()
{
  this.loading = true;
  this.submitShow = false;
  if(this.LoginForm.invalid){
    return;
  }
  this.UserInfoService.LoginIn(this.LoginForm.value).subscribe((data)=>{
    if(data.message =='success'){
    localStorage.setItem('token' , data.token);
    this.UserInfoService.saveUserData();
    this.Router.navigateByUrl('home');
    this.loading = false;
    this.submitShow = true;
    }
    else{
      alert(data.message)
    }
  })
}
}
