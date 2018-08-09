import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private data: RestDataSource){}

  logout(){
    this.data.logout();
    
  }

}
