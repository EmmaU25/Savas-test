import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Gobfacts } from "../models/gobfacts";
import { SavasService } from "../services/savas.service";
import { DetailsPage } from "../pages/details/details.page";
import { LoginService } from "../services/login.service";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  flag: boolean = false;
  constructor(public gobservice : SavasService , private modalController: ModalController, public user: LoginService) {}
  
  ngOnInit(){
    this.initializeItems();
  }


  initializeItems(){
    this.gobservice.getGobFacts().subscribe( (data: Gobfacts[]) =>{
      this.gobservice.activies = data["results"];
      this.flag = true;
    });
  }

  async presentModal(id:string){
    const modal = await this.modalController.create({
      component: DetailsPage,
      cssClass: 'modal-80',
      swipeToClose: true,
      backdropDismiss: true,
      mode: 'ios',
      componentProps: {
        'ide': id
      }
    });
    return await modal.present();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.gobservice.activies = this.gobservice.activies.filter((item) => {
        return (item.organization.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  closesession(){
    this.user.logout();
  }

}
