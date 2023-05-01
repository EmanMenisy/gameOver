import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userinfo:any ; 
  isLoggedIn:boolean = false;
  constructor(private UserInfoService:UserInfoService){
  }

  ngOnInit(): void {
   this.UserInfoService.userdata.subscribe((data)=>{
     if(this.UserInfoService.userdata.getValue()!= null){
      this.userinfo = data;
      this.isLoggedIn = true;
     }

     else{
      this.isLoggedIn = false;

     }

   })
  }

  LogOut(){
    this.UserInfoService.logOut()
  }

}
