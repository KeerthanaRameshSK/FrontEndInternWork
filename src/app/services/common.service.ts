import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  flightNo:string='';
  tckno:string='';
  source:string='';
  destination:string='';
  depature:string='';

  constructor() { }

  getFlightNo()
  {
    return this.flightNo;
  }

  setFlightNo(flightno:string)
  {
    this.flightNo=flightno;
  }

  getTicketNo()
  {
    return this.tckno;
  }

  setTicketNo(ticketno:string)
  {
    this.tckno=ticketno;
  }

  getSource()
  {
    return this.source;
  }

  getDestination()
  {
    return this.destination;
  }

  getDepature()
  {
    return this.depature;
  }

  setSourceAndDestination(src:string, dest:string, dep:string)
  {
    this.source=src;
    this.destination=dest;
    this.depature=dep;
  }
}
