import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameservService } from '../gameserv.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
category:any;
gamesByCategory:any
count:number = 10;
constructor(private _ActivatedRoute:ActivatedRoute , private _GameservService:GameservService){
   _ActivatedRoute.paramMap.subscribe({
    next:(paramMap)=>{this.category = paramMap.get('category'),
    console.log(this.category)
    this.getGamesByCategory()
    },
    error:()=>{},
    complete:()=>{},

  })
}


getGamesByCategory(){
  this._GameservService.getgamebyCategory(this.category).subscribe((data)=>{
   this.gamesByCategory = data.splice(0,this.count);
   console.log(this.gamesByCategory)
  })
}

ngOnInit(): void{

}


increaseCount(){

  this.count+= 10;
  this.getGamesByCategory()

}



}
