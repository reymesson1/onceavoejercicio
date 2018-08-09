import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  registerData = {}

   constructor(private data : RestDataSource, private router: Router){}

  Post() {
    this.data.sendUserRegistration(this.registerData);      
  }

}