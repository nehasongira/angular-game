import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { CountService } from '../count.service';
// import {AppGlobals } from 
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Input('parentdata') public parentData1 ;
  value: number;
  public change = true;
  public change1 = false;
  public change2 = false;
  public change3 = false;
  // public sum=0;
  sum: number;
  count: number;
  // public randomNumber = Math.random() >= 0.3;
  onclick(value) {
    if (value == true) {
      this.count = this.count + 10;
      //console.log(this.sum);
    }
    else {
      this.count = this.count - 5;
      //console.log(this.sum);
    }
   // this.count = this.count + 1;
    this.countService.changeCount(this.count);
    
  }
 // public data: Array<any> = MyData;
onsubmit(value)
{
  this.value=value;
  this.gameService.myMethod(this.count,this.value);
  
}
   posts()
  {
    this.playerservice.post()
    .subscribe(
      (val) => {
        console.log("POST call successful value returned in body", 
                    val);
    }
    );
   
  } 

  constructor(
     private gameService: GameService,
     private playerservice: GameService,
    private countService: CountService
  ) {
    
    // this.sum = this.gameService.sum
    this.countService.currentCount.subscribe(
      (count) => { 
        this.count = count 
      });
  }
  //  public val1=true;
  //  public val2=false;
  ngOnInit() {
    // this.gameService.currentMessage.subscribe(value => this.value = value)
    setInterval(() => {
      // this.change = Math.random() >= 0.5;
      // this.change1=Math.random() >= 0.5;
      // this.change2=Math.random() >= 0.5;
      // this.change3=Math.random() >= 0.5;


      this.change=this.parentData1 ;
      // this.change1=!this.val1 && !this.val2;
      // this.change2=this.val1 && !this.val2;
      // this.change3=!this.val1 && !this.val2;
     
    }, 1000);
  }


}
