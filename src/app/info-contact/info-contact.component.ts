import { Component, OnInit,trigger, state, style, transition, animate,Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styleUrls: ['./info-contact.component.scss'],
  animations: [
   trigger('slideInOut', [
     state('in', style({
       transform: 'translate3d(0, 0, 0)'
     })),
     state('out', style({
       transform: 'translate3d(100%, 0, 0)'
     })),
     transition('in => out', animate('400ms ease-in-out')),
     transition('out => in', animate('400ms ease-in-out'))
   ]),
 ]
})
export class InfoContactComponent implements OnInit {

  constructor() { }
@Output() infoContactEvent = new EventEmitter<string>();
isClose="close";
  ngOnInit() {
  }
  close(){
    this.infoContactEvent.emit(this.isClose)
  }

}
