import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ReseervationService} from '../services/reseervation.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent {

  ticketno:string='';

  constructor(private route:Router, private reservationService:ReseervationService, private common:CommonService){}

  ngOnInit():void
  {
    this.ticketno=this.common.getTicketNo();
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
