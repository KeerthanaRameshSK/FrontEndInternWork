import { Component } from '@angular/core';
import {signup} from '../models/signupmodel';
import {SignupService} from '../services/signup.service';
import {Router} from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupRequest:signup=
  {
    Username:'',
    Password:'',
    Role:'',
    FirstName:'',
    LastName:'',
    Email:'',
    MobileNo:'',
    ConfirmPassword:''

  };

  constructor(private signupservice:SignupService,private router:Router){}

  signupUser()
  {
    console.log(this.signupRequest);
    this.signupservice.signupUser(this.signupRequest).subscribe({
      next:(user) =>
      {
        if(user)
        {
          this.router.navigate(['loginpage']);
        }
      },
      error:error => 
      {
        window.alert("Enter valid details");
        console.log(error);
      }
    });
  }

}


