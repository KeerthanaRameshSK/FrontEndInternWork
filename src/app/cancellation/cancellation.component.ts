import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Cancellation } from '../models/cancellationmodel';
import { CancellationService} from '../services/cancellation.service';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent {

  RefundAmount:any='';

  TicketId: any;

  flag:boolean=false;

  ngOnInit():void
  {
  }

  constructor(private route:Router, private CancellationService:CancellationService){}

  cancel()
  {
    console.log(this.TicketId)
    this.CancellationService.cancel(this.TicketId).subscribe(data =>
      {
        this.flag=true;
        this.RefundAmount=data;
        console.log(data)
      },
      error =>
      { window.alert("cannot cancel ticket") }
      
    )
  }
  
  

}

