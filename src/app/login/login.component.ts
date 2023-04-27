import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {signin} from '../models/signinmodel';
import {SigninService} from '../services/signin.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    signinRequest:signin=
    {
      Username:'',
      Password:'',
      Role:''
    };
    
    constructor(private signinservice:SigninService,private router:Router){}


  signinUser()
  {
    console.log(this.signinRequest);
    this.signinservice.signinUser(this.signinRequest)
    .subscribe(
      {
        next:(user)=>
        {
          if(user)
          {
            if(this.signinRequest.Role=="Customer" || this.signinRequest.Role=="customer")
            {
              this.router.navigate(['customerpage']);
            }
            else if(this.signinRequest.Role=="Admin" || this.signinRequest.Role=="admin")
            {
              this.router.navigate(['adminpage']);
            }
            else
            {
              window.alert("Invalid credentials");
            }
          }
        },
        error: error =>
        {
          window.alert("Invalid Credentials");
          console.log(error);
        }
      }
    );
  }

}
