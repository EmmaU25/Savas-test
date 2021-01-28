import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { User } from '../models/user';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[]= [];
  user: boolean = false;
  tipo :string = "";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    public router: Router,
    public http: HttpClient
  ) { }


  getAllUsers(){
    return this.http.get(environment.apiEmma+"users");
  }

  registerUser(user:User){
    return this.http.post(environment.apiEmma+"users", JSON.stringify(user), this.httpOptions);
  }

  saveUserStorage() {
    localStorage.setItem('session', JSON.stringify(this.user));
  }
  
  login(usere:string, pwd:string):boolean{
    let flag:boolean=false;
    this.users.map(dta =>{
      if(dta.email === usere && dta.password === pwd){
        this.user = true;
        this.tipo = dta.tipo;
        flag=true;
        this.saveUserStorage();
      }
    });
    return flag
  }

  logout(){
    localStorage.removeItem('session');
    // this.user = null;
    this.router.navigateByUrl("/");
  }

  checkSession(){
    return localStorage.getItem('session') ? true : false;
  }

}
