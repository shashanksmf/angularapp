import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() messageEvent = new EventEmitter<string>();
  isClose1:string="close";
  close(){
    this.messageEvent.emit(this.isClose1)
  }
}
