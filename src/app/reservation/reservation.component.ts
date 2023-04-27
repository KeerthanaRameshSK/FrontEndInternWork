import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ReseervationService} from '../services/reseervation.service';
import {reservation} from '../models/reservationmodel';
import {FormsModule} from '@angular/forms';
import {CommonService} from '../services/common.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent {
  reservReq:reservation=
  {
        FlightNo:'',
        Name :'',
        AadharNo :'',
        NoOfTicket :'',
        EmailId :'',
        PhoneNo :'',
  }

  fno:string='';

  tckno:any='';

  ngOnInit():void
  {
    this.fno=this.common.getFlightNo();
  }

  constructor(private route:Router, private reservService:ReseervationService,private common:CommonService){}

    BookFlight()
    {
      this.reservReq.FlightNo=this.fno;
      console.log(this.reservReq);
      this.reservService.Thankyou(this.reservReq).subscribe(data =>
        {
          console.log(data);
          this.tckno=data;
          this.common.setTicketNo(this.tckno);
        },
        error =>
          {
            window.alert(error);
          },
        () =>
          {
            this.route.navigate(['thankyoupage']);
          }
        )
    }
}
