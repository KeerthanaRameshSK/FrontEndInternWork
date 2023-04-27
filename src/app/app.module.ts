import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightComponent } from './flight/flight.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { TicketstatusComponent } from './ticketstatus/ticketstatus.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    CustomerComponent,
    AdminComponent,
    FlightComponent,
    SearchFlightsComponent,
    ReservationComponent,
    ThankyouComponent,
    TicketstatusComponent,
    CancellationComponent,
    AddFlightComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
