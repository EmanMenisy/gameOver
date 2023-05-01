import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameservService } from '../gameserv.service';


@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit{
  plats:any;
  platformsgames:any;
  count:number =24;

  constructor(private _ActivatedRoute:ActivatedRoute , private _GameservService:GameservService ){
     this._ActivatedRoute.paramMap.subscribe({
      next:(pram)=>{
        this.plats = pram.get('plats')
        this.getplatformsgames()
      },
      error:()=>{},
      complete:()=>{}
     });  
  }

  increaseCount(){
    this.count+= 16;
    this.getplatformsgames();
  }
  ngOnInit(): void { 
  }

  getplatformsgames(){
      this._GameservService.platformsgames(this.plats).subscribe({
      next:(data)=>{this.platformsgames = data.splice(0, this.count)},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log(this.platformsgames)},
    })
  }
}
