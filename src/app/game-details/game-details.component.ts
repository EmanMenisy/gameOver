import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameservService } from '../gameserv.service';
import { Location } from '@angular/common';
GameservService

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit{
id:Number=0;
gamebyid:any;
getallgames:any;
previousenable = true;

constructor(private _GameservService:GameservService ,
  private _activatedRoute:ActivatedRoute ,
  private _location:Location , private router:Router){
 this._activatedRoute.paramMap.subscribe({
  next:(paramMap)=>{this.id = Number(paramMap.get('id')) , this.getgamebyid()}
})
}

ngOnInit(): void {
    this.getAllGame()
}


getAllGame(){
    this._GameservService.getmultitags().subscribe({
       next:(data)=>{this.getallgames = data}
     })
  }

getgamebyid(){
  this._GameservService.getGameById(this.id).subscribe({
    next:(data)=>{this.gamebyid = data}
  })
}

prevgame(){

        let currenIndex = this.getallgames.findIndex((elem:any) => elem.id == this.id)
        let previd = 0 ;

        if(currenIndex == 0){

          this.previousenable = true;
        }

        if(currenIndex > 0){
        previd = this.getallgames[currenIndex -1].id
        this.router.navigate(['details',previd])
        }

      }


back(){

    this._location.back();
}

nextgame(){
  let currenIndex = this.getallgames.findIndex((elem:any) => elem.id == this.id)
        let nextid = 0;
        if(currenIndex >= 0){
        this.previousenable = false;
        nextid = this.getallgames[currenIndex +1].id
        this.router.navigate(['details',nextid])
        }
        }


}
