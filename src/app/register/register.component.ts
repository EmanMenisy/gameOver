import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  spinFlag:boolean = false;
  constructor(private UserInfoService:UserInfoService , private Router:Router){
    if(localStorage.getItem('token') != null){
      this.Router.navigateByUrl('home')
    }
  }

  ngOnInit(): void {
  }

  registarionForm:FormGroup = new FormGroup({
    'first_name': new FormControl('' , [Validators.required , Validators.maxLength(7), Validators.minLength(3)]),
    'last_name': new FormControl('' , [Validators.required , Validators.maxLength(7), Validators.minLength(3)]),
    'email': new FormControl('' , [Validators.required , Validators.email]),
    'password': new FormControl('' , [Validators.required , Validators.pattern(/^[a-z][0-9]{3}$/)])
  })

  registarionFormSubmit(){
    if(this.registarionForm.invalid){
      return ;
    }
    this.UserInfoService.SignUp(this.registarionForm.value).subscribe((data) =>
    {
     if(data.message == 'success'){
     console.log(data)
     this.Router.navigateByUrl('/login')
     this.UserInfoService.userdata = this.registarionForm.value;
     }
     else{
      alert(data.message)
     }

    }

    )
  }




}
