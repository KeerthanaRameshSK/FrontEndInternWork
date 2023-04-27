import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {reservation} from '../models/reservationmodel'


@Injectable({
  providedIn: 'root'
})
export class ReseervationService {

  Url:string="http://localhost:53356";

  constructor(private http:HttpClient) { }

  Thankyou(ReservReq:reservation)
  {
    return this.http.post(this.Url+'/Add',ReservReq);
  }
}
