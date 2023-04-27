import { Component } from '@angular/core';
import{Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Flight } from '../models/Flightmodel';
import { ReportService} from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  report:any=[];

  FlightNo: any;

  ngOnInit():void
  {
  }

  constructor(private route:Router, private ReportService:ReportService){}

  Generate()
  {
    console.log(this.FlightNo)
    this.ReportService.Generate(this.FlightNo).subscribe(data =>
      {
        this.report=data;
        console.log(data)
      },
      error =>
      { window.alert("error") }
      
    )
  }

}
