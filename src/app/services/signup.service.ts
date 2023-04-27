import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {signup} from '../models/signupmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  Url:string="http://localhost:53356";

  constructor(private http:HttpClient) { }

  signupUser(signupRequest:signup):Observable<signup>
  {
    return this.http.post<signup>(this.Url+'/RegisterUser',signupRequest);
  }
}
