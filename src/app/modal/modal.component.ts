import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {
  modalName:string;
  constructor() { }

  message:string;
  modalMessage($event) {
    console.log($event);
   this.message = $event
   // console.log(this.message);
 }
 public getModal(){
  //this.modalName=this.get();
 }
}
