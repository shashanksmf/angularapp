import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {

  arr: Array<any> = [];
  constructor() { }

  @Input() peopleArr = [];
  ngOnInit() {
    console.log("=----",this.peopleArr);
  }
  selected:any;
  @Output() userEvent = new EventEmitter<string>();
  changeChat(id:string) {
    this.selected = id;
    this.arr = [];

    this.userEvent.emit(id)
  }
  isActive(item) {
      return this.selected === item;
  };
  isOpen(item) {
      return this.selected === item;
  };
}
