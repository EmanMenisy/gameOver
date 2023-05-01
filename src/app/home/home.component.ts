import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { GameservService } from '../gameserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  personalizedRecommendation:any;
  mostplayedToday:any;

 constructor(private GameservService:GameservService , private _router:Router){

  if( localStorage.getItem('token') == null){
       this._router.navigateByUrl('/login')
    }
 }
  ngOnInit(): void {
   this.getgames()
  }

 getgames(){
  this.GameservService.getmultitags().subscribe({
    next:(data)=>{
      this.personalizedRecommendation = data.splice(0,3) ;
      this.mostplayedToday = data.splice(3,6)
      console.log(data)
    },
    error:(err)=>{console.log(err)},
    complete:()=>{
      console.log(this.personalizedRecommendation , this.mostplayedToday)
    }
  }
  )
 }




}
