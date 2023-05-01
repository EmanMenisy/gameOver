import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GameservService {
  options;
  constructor(private _http:HttpClient) {
    this.options = {
      "headers": new HttpHeaders({
        "X-RapidAPI-Key": "83ead1ad26msh09be2efaa54b71ap13a739jsne9cb26d9c7e2",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      })
      }

    };


    getmultitags():Observable<any>{
      return this._http.get("https://free-to-play-games-database.p.rapidapi.com/api/games",
      this.options)
     }

     platformsgames(plats:string):Observable<any>{
       return this._http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plats}` , this.options);
     }

     getGamesSortedBy(sortedBy:string ):Observable<any>{
       return this._http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sortedBy}` , this.options);
     }

     getgamebyCategory(category:string):Observable<any>{
      return this._http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, this.options);
     }

     getGameById(id:Number):Observable<any>{
      return this._http.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, this.options);
     }

  }



