import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private data: RestDataSource){}

  loginData = {};

  Post(){

    this.data.loginUser(this.loginData);
  }
  
}
