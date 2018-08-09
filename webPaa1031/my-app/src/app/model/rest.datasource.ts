import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RestDataSource{

    constructor(private http: HttpClient, private route: Router){}

    messages = []
    users = []
    TOKEN_KEY = 'token'

    title = true;

    get token(){
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout(){
        localStorage.removeItem(this.TOKEN_KEY);
    }
    
    sendUserRegistration(regData) {
      this.http.post<any>('http://localhost:8081/register', regData).subscribe(res =>{ 
          localStorage.setItem(this.TOKEN_KEY, res.token)  
          this.route.navigateByUrl('/home');    
        })        
    }

    loginUser(loginData) {
        this.http.post<any>('http://localhost:8081/login', loginData).subscribe(res =>{
            console.log(res);
            console.log(this.isAuthenticated);
            localStorage.setItem(this.TOKEN_KEY, res.token)
            if(this.isAuthenticated){                
                this.route.navigateByUrl('/home');
            }else{
                console.log("Registration Failed")
            }   
        });
    }


}