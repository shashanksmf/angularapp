import { Injectable } from '@angular/core';
import { Component, OnInit,trigger, state, style, transition, animate,Output, EventEmitter } from '@angular/core';
import {ModalComponent} from './modal/modal.component';
@Injectable()
export class DataServiceService {
  modalComponent=ModalComponent;
  modalName:string=""
  get() {
    return this.modalName;
  }
  openModal(modalName){
    this.modalName=modalName;
  }

}
