import { Component } from '@angular/core';
import { LoginService } from "../services/login.service";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public user: LoginService ) {}
  closesession(){
    this.user.logout();
  }
}
