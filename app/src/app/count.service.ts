import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private countSource = new BehaviorSubject(0);
  currentCount = this.countSource.asObservable();
  
  // myMethod$: Observable<any>;
  //   private myMethodSubject = new Subject<any>();

  constructor() { 
    //this.myMethod$ = this.myMethodSubject.asObservable();
  }
  myMethod(data:number,value:string) {
    console.log(data); 
    console.log(value);
    // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    //this.myMethodSubject.next(data);
}
  changeCount(count: number) {
    this.countSource.next(count);
  }
}
