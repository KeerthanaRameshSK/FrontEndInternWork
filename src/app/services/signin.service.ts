import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { signin } from '../models/signinmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  Url:string="http://localhost:53356";

  constructor(private http:HttpClient) { }

  signinUser(signinRequest:signin):Observable<signin>
  {
    return this.http.post<signin>(this.Url+'/ValidateUser',signinRequest);
  }
}
