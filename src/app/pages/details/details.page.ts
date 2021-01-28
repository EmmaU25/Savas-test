import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Gobfacts } from 'src/app/models/gobfacts';
import { SavasService } from "../../services/savas.service";
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @Input () ide: string;
  res: Gobfacts;
  flag : boolean  = false;
  constructor(private savas: SavasService, private modal: ModalController) { }

  ngOnInit() {
   this.savas.activies.filter(element => {
     if(element._id == this.ide){
       this.res = element;
       this.flag = true;
     }
   })
  }

  closeModal(){
    this.modal.dismiss();
  }
}
