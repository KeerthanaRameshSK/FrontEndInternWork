import { Component } from '@angular/core';
import{Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Flight } from '../models/Flightmodel';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {


  Flights:Flight=
  {
    FlightNo:'',
    Origin:'',
    Destination:'',
    NoOfSeats :'',
    Depature : '',
    DepatureTime:'',
    Arrival :'',
    ArrivalTime:'',
    Fare :''
  }

  flst:any=[];

  ngOnInit():void
  {
  }

  constructor(private route:Router, private flightservice:FlightService){}

  addFlights()
  {
    console.log(this.Flights);
    this.flightservice.addFlights(this.Flights).subscribe( data =>
      {
         console.log(data);
         this.flst=data;
         console.log(this.flst);
         window.alert("Flight added");
         this.route.navigate(['flightpage']);

      },
      error =>
      {
        window.alert("Flight not added");
      })
  }

 
}
