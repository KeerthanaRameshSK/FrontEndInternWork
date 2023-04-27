import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminComponent } from './admin/admin.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { CustomerComponent } from './customer/customer.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { TicketstatusComponent } from './ticketstatus/ticketstatus.component';

const routes: Routes = [{path:'loginpage',component:LoginComponent},
{path:'homepage',component:HomeComponent},
{path:'signuppage',component:SignupComponent},
{path:'adminpage',component:AdminComponent},
{path:'flightpage',component:FlightComponent},
{path:'customerpage',component:CustomerComponent},
{path:'searchflightspage',component:SearchFlightsComponent},
{path:'reservationpage',component:ReservationComponent},
{path:'thankyoupage',component:ThankyouComponent},
{path:'ticketstatuspage',component:TicketstatusComponent},
{path:'cancelpage',component:CancellationComponent},
{path:'addFlightspage',component:AddFlightComponent},
{path:'reportpage',component:ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
