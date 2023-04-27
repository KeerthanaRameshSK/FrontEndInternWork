import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  source:string='';
  destination:string='';
  depature:string='';
  
  constructor(private route:Router, private common:CommonService){}

  ngOnInit():void
  {
  }

  SearchFlights()
  {
    this.common.setSourceAndDestination(this.source,this.destination,this.depature);
    // this.flightComp.getFlights(this.source,this.destination);
    this.route.navigate(['searchflightspage']);
  }
  

  Ticketstatus()
  {
      this.route.navigate(['ticketstatuspage']);
  }

  Cancellation()
  {
    this.route.navigate(['cancelpage']);
  }
}