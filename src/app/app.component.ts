import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirlineApp';

  constructor(private route:Router){}

  flag:number=0;
 
  RedirectToLogin()
  {
    this.flag=1;
    this.route.navigate(['loginpage']);
  }

  RedirectToLogout()
  {
    this.flag=0;
    this.route.navigate(['homepage']);
  }

    
}



