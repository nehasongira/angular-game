import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  public value1 = true;
  public value2 = true;
  public value3 = true;
  public value4 = true;
  timeLeft: number = 10;
  interval;
  // game(){
    
     
   
   startgame()
   {
   
    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
       if(this.timeLeft==0){
         clearInterval(this.interval);

        //  this.timeLeft=0;
        window.alert('time is up');
        
      }
     
    },1000)

    this.interval=setInterval(()=>{
     
      var x= Math.floor(Math.random()*4)+1;
   switch (x) {
     case 1:
       this.value1= true;
       this.value2= false;
       this.value3= false;
       this.value4= false;
       break;
     case 2:
       this.value1= false;
       this.value2= true;
       this.value3= false;
       this.value4= false;
       break;
     case 3:
       this.value1= false;
       this.value2= false;
       this.value3= true;
       this.value4= false;
       break;
     case 4:
       this.value1= false;
       this.value2= false;
       this.value3= false;
       this.value4= true;
       break;
     default:
         break;
   }
   },1000);
   }
    
  // }
  constructor() { }
  ngOnInit() {
    // setInterval(()=>{
     
    //    var x= Math.floor(Math.random()*4)+1;
    // switch (x) {
    //   case 1:
    //     this.value1= true;
    //     this.value2= false;
    //     this.value3= false;
    //     this.value4= false;
    //     break;
    //   case 2:
    //     this.value1= false;
    //     this.value2= true;
    //     this.value3= false;
    //     this.value4= false;
    //     break;
    //   case 3:
    //     this.value1= false;
    //     this.value2= false;
    //     this.value3= true;
    //     this.value4= false;
    //     break;
    //   case 4:
    //     this.value1= false;
    //     this.value2= false;
    //     this.value3= false;
    //     this.value4= true;
    //     break;
    //   default:
    //       break;
    // }
    // },1000);
   
  }

}
