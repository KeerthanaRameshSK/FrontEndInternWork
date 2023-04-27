import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { ticketstatus } from '../models/ticketstatusmodel';
import { TicketstatusService} from '../services/ticketstatus.service';


@Component({
  selector: 'app-ticketstatus',
  templateUrl: './ticketstatus.component.html',
  styleUrls: ['./ticketstatus.component.css']
})
export class TicketstatusComponent {

  TcktStatus:any=[];

  TicketId: any;

  ngOnInit():void
  {
  }

  constructor(private route:Router, private TicketstatusService:TicketstatusService){}

  showstatus()
  {
    console.log(this.TicketId)
    this.TicketstatusService.showstatus(this.TicketId).subscribe(data =>
      {
        this.TcktStatus=data;
        console.log(data)
      },
      error =>
      { window.alert("Record not found") }
      
    )
    
  }
  
  

}
