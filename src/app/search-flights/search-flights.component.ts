import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Flight } from '../models/Flightmodel';
import { FlightService } from '../services/flight.service';
import {CommonService} from '../services/common.service';
import {SearchFlights} from '../models/searchFlightsModel';


@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent  {
  flightslst:Flight=
  {
        FlightNo:'',
        Origin:'',
        Destination:'',
        NoOfSeats :'',
        Depature : '',
        Arrival :'',
        Fare :'',
        DepatureTime : '',
        ArrivalTime :'',
  };
 
  Flights:SearchFlights=
  {
    Origin:'',
    Destination:'',
    Depature:'',
  }
  
  flst:any=[];

  ngOnInit():void
  {
    this.Flights.Origin=this.common.getSource();
    this.Flights.Destination=this.common.getDestination();
    this.Flights.Depature=this.common.getDepature();
    this.getFlights();
  }

  constructor(private route:Router, private flightservice:FlightService, private common:CommonService){}

  getFlights()
  {
    console.log(this.Flights);
    this.flightservice.getFlights(this.Flights).subscribe( data =>
      {
         console.log(data);
         this.flst=data;
      },
      error =>
      {
        window.alert("no flights found");
      })
  }

    reservation(flightNo:string)
    {
      this.common.setFlightNo(flightNo);
      this.route.navigate(['reservationpage']);
    }



}

  
  