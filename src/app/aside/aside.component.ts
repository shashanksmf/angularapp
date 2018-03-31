import { Component, OnInit,trigger, state, style, transition, animate, Input, Output,EventEmitter } from '@angular/core';
import { ShareDataService } from "../share-data.service";
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
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
 ],

})
export class AsideComponent implements OnInit {

  constructor(private data: ShareDataService) { }
  menu:string='';
  menuState:string = 'out';
  message:string;
  isOpen=false;
  debugger;
  @Input() userEv;
  // @Input() menu;

  ngOnInit() {
    console.log(this.menu)
  }

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  receiveMessage($event) {
    console.log("$event==>",$event)
  if($event!=''){
    this.message = $event
    this.toggleMenu();
  }
   // console.log(this.message);
 }

}
