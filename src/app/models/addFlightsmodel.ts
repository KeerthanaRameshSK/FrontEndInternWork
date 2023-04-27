import { DatePipe } from "@angular/common";
import { DeclarationListEmitMode } from "@angular/compiler";

export interface AddFlight
{
        FlightNo :string; 
        Origin:string;
        Destination:string;
        NoOfSeats :string;
        Depature : string;
        Depature_Time:string;
        Arrival :string;
        Arrival_Time:string;
        Fare :string;
}