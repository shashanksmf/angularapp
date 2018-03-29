import { Component, OnInit,trigger, state, style, transition, animate,Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
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
export class NotificationComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @Output() messageEvent = new EventEmitter<string>();
  isClose="close";
  close(){
    this.messageEvent.emit(this.isClose)
  }
}
