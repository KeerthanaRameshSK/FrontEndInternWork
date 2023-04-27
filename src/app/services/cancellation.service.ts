import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CancellationService {

  Url:string="http://localhost:53356";

  constructor(private http:HttpClient) { }

  cancel(ticketId:any)
  {
    return this.http.delete(this.Url+'/CancelTicket/'+ticketId);
  }
}
