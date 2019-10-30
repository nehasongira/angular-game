import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../util.service';
import { CountService } from '../count.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  @Input('parentdata') public parentData1 ;
  public change = true;
  //message: string = 'xyz';
  count:number;
  public sum = 0;
  public randomNumber = Math.random() >= 0.5;
  onclick(value) {
    
    if (value == true) {
      this.count = this.count + 10;
      //console.log(this.sum);
    }
    else {
      this.count = this.count - 5;
      //console.log(this.sum);
    }
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
      this.change = this.parentData1;

     


    }, 1000);

  }

}
