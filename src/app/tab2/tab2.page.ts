import { Component, OnInit } from '@angular/core';
import { Gobfacts } from "../models/gobfacts";
import { SavasService } from "../services/savas.service";
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  flag: boolean = false;
  constructor(public gobservice : SavasService,  public user: LoginService) {}

  ngOnInit(){
    this.gobservice.getGobFacts().subscribe( (data: Gobfacts[]) =>{
      this.gobservice.activies = data["results"];
      console.log(data["results"]);
      this.flag = true;
    });
  }

  closesession(){
    this.user.logout();
  }
}
