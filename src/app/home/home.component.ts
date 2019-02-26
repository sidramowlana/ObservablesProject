import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  myNumberSubscription:Subscription;
  customSubscription:Subscription;

  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000)
    .map((data:number) => { return data*2; });
    // ).map((data1:number)=>
    // {
    //   return data1 * 100;
    // });
    this.myNumberSubscription = myNumber.subscribe(
      (number : Number)=>
      {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer:Observer<string>)=>
      {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        
        // setTimeout(() => {
        //   observer.error('error package');
        // }, 6000);
        setTimeout(() => {
          observer.complete();
        }, 7000);      
      });

      this.customSubscription = myObservable.subscribe(
        (data:String)=>{console.log(data);},
        (error:String)=>{console.log(error);},
        ()=>{console.log('completed');}
      );
  }

  ngOnDestroy()
  {
    this.customSubscription.unsubscribe();
    this.myNumberSubscription.unsubscribe();
  }

}
