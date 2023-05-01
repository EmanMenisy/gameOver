import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameservService } from '../gameserv.service';



@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent implements OnInit{
  sortedby:any;
  sortedbygames:any;
  count:number =24;

  constructor(private _ActivatedRoute:ActivatedRoute , private _GameservService:GameservService ){
     this._ActivatedRoute.paramMap.subscribe({
      next:(sortedby)=>{
        this.sortedby = sortedby.get('sorted')
        this.getGamesSortedBy()
      },
      error:()=>{},
      complete:()=>{}
     });  
  }

  increaseCount(){
    this.count+= 16;
    this.getGamesSortedBy();
  }
  ngOnInit(): void{ 
  }

  getGamesSortedBy(){
      this._GameservService.getGamesSortedBy(this.sortedby).subscribe({
      next:(data)=>{this.sortedbygames = data.splice(0, this.count)},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log(this.sortedbygames)},
    })
  }


}
