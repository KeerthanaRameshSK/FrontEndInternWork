import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Flight} from '../models/Flightmodel';
import { Observable } from 'rxjs';
import {SearchFlights} from '../models/searchFlightsModel';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  Url:string="http://localhost:53356";

  constructor(private http:HttpClient) { }

  showflights()
  {
    return this.http.get(this.Url+'/ShowAll');
  }

  getFlights(searchFlightsModel:SearchFlights)
  {
    return this.http.post(this.Url+'/GetFlights',searchFlightsModel);
  }

  addFlights(Flightmodel:Flight)
  {
    return this.http.post(this.Url+'/AddFlight',Flightmodel);
  }

  Generate()
  {
    return this.http.get(this.Url+'/')
  }

  
}