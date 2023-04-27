import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ticketstatus} from '../models/ticketstatusmodel'


@Injectable({
  providedIn: 'root'
})
export class TicketstatusService {

  Url:string="http://localhost:53356";

  constructor(private http:HttpClient) { }

  showstatus(ticketId:any)
  {
    return this.http.get(this.Url+'/ShowByIdTicket/'+ticketId);
  }
}
