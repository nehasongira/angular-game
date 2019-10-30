import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { game } from '../game';
import { CountService } from '../count.service';
//import {game} from '../game';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit {
  public scores=[];
  count:number;
  playername:string;
  message:string;

  // post()
  // {
  //   this.playerservice.post()
  //   .subscribe(
  //     (val) => {
  //       console.log("POST call successful value returned in body", 
  //                   val);
  //   }
  //   );
   
  // }
  constructor(private playerservice: GameService,private countService: CountService) { 
    this.playerservice.getAllPlayer()
    .subscribe(data=>this.scores=data);

   
    // this.sum = this.gameService.sum
    this.countService.currentCount.subscribe(
      (count) => { 
        this.count = count 
      });
    
    //this.playername=this.playerservice.get().subscribe(message => this.message = message);
  }

  // public opost=[{
  //   score:this.count
  // }]
  // this.opost.playerName=this.playername;
  

  

  ngOnInit() {
  //  this.playerservice.post(this.opost).subscribe
  }

}
