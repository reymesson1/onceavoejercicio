import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './admin/login.component';
import { RegistrationComponent } from './admin/registration.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestDataSource } from './model/rest.datasource';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, NavbarComponent, MasterComponent, DetailComponent, LoginComponent, RegistrationComponent
  ],
  imports: [
    HttpClientModule, BrowserModule, FormsModule, RouterModule.forRoot([
      { path: "home", component: HomeComponent }, 
      { path: "master", component: MasterComponent }, 
      { path: "detail", component: DetailComponent }, 
      { path: "login", component: LoginComponent }, 
      { path: "registration", component: RegistrationComponent }, 
      { path: "**", redirectTo: "/home" }
    ])
  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
