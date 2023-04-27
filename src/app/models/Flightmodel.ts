import { DatePipe } from "@angular/common";
import { DeclarationListEmitMode } from "@angular/compiler";

export interface Flight
{
        FlightNo :string; 
        Origin:string;
        Destination:string;
        NoOfSeats :string;
        Depature : string;
        Arrival :string;
        DepatureTime : string;
        ArrivalTime :string;
        Fare :string;
}