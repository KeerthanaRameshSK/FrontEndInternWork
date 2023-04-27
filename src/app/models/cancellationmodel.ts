import { DatePipe } from "@angular/common";
import { DeclarationListEmitMode } from "@angular/compiler";

export interface Cancellation
{
        TicketId :string;
        FlightNo :string;
        DateOfCancellation :string; 
        TimeOfCancellation :string;
        RefundAmount :string;
}