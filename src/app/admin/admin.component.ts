import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private route:Router){}

  ShowFlights()
  {
      this.route.navigate(['flightpage']);
  }

  AddFlights()
  {
      this.route.navigate(['addFlightspage']);
  }

  Report()
  {
      this.route.navigate(['reportpage']);
  }

}
