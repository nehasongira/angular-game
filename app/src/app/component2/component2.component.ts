import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { CountService } from '../count.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input('parentdata') public parentData1 ;
  public change1 = true;
  sum: number;
  count: number;
  //public sum=0;
  public randomNumber = Math.random() >= 0.5;
  onclick(value) {
    // this.count = this.countService.getCount();
    if (value == true) {
      this.count = this.count+ 10;
      //console.log(this.sum);
    }
    else {
      this.count = this.count - 5;
      //console.log(this.sum);
    }
    //this.count = this.count + 1;
    this.countService.changeCount(this.count);
    
  }

  

  constructor(
    // private gameService: GameService,
    private countService: CountService
  ) {
    // this.sum = this.gameService.sum
    this.countService.currentCount.subscribe(
      count => {
        this.count = count;
      }
    );
  }

  ngOnInit() {
    setInterval(() => {
      this.change1=this.parentData1 ;
      // setInterval(()=>{
      //   this.change1=this.parentData1;
      // },500)
      


    }, 1000);
  }



}
