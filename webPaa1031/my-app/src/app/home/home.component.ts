import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private data: RestDataSource){
    console.log(this.data.isAuthenticated);
  }

  title = 'Home';

}
