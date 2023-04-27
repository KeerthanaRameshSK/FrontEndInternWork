import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Report} from '../models/reportmodel';



@Injectable({
  providedIn: 'root'
})
export class ReportService {

  Url:string="http://localhost:53356";

  constructor(private http:HttpClient) { }

  Generate(flightNo:any)
  {
    return this.http.get(this.Url+'/GetFlightRevenue/'+flightNo);
  }
}
