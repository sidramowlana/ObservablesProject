import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  user1Activated = false;
  user2Activated = false;

  removethis :Subscription;
  constructor(private usersService:UsersService){}

  ngOnInit()
  {
   this.removethis = this.usersService.activate.subscribe(
      (id:number)=>
      {
        if(id===1)
        {
          this.user1Activated = true;
        }
        else if(id===2)
        {
          this.user2Activated = true;
        }
      }
    );
    
  }  
  ngOnDestroy()
  {
    this.removethis.unsubscribe();
  }
}
