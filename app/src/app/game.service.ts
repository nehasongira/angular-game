import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { game } from './game';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public totalScore:number;
  public playerName1:string;

  myMethod(data:number,player) {
    // console.log(data); 
    // console.log(player);
    this.totalScore=data;
    this.playerName1=player;    
  }
  get()
  {
    return this.playerName1;
  }
  
  private _url: string="http://localhost:8080/api/players"
  constructor(private http : HttpClient) { }

  getAllPlayer():Observable<game[]> 
  {
    return this.http.get<game[]>(this._url);
  }
  
 
  // opost=[{
  //   "playerName":"this.playerName1",
  //   "score":"this.totalscore"
  // }]

  post()
  {
    // console.log(totalScore); 
    // console.log(playerName1);
    console.log("helllo"); 
     return this.http.post(this._url,{
      "playerName":this.playerName1,
      "score":this.totalScore,
    }
      )
  }

}
