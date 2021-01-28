import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Gobfacts } from "../models/gobfacts";


@Injectable({
  providedIn: 'root'
})
export class SavasService {
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  
  activies: Gobfacts[];
  constructor(private  http: HttpClient) { }

  getGobFacts(){
    return this.http.get(environment.gobapi);
  }
}
