import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {


  flst:any=[];

  ngOnInit():void
  {
    this.showflights();
  }

  constructor(private route:Router, private flightservice:FlightService){}

  showflights()
  {
    this.flightservice.showflights().subscribe(data =>
      {
        this.flst=data;
        console.log(data)
      })
  }

 
}
