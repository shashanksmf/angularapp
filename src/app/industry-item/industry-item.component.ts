import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-industry-item',
  templateUrl: './industry-item.component.html',
  styleUrls: ['./industry-item.component.scss']
})
export class IndustryItemComponent implements OnInit {

  constructor() { }
  @Input() industryArr=[];
  @Output() modalEvent = new EventEmitter<string>();
  ngOnInit() {
  }
  open(event:string){
    this.modalEvent.emit(event)
    console.log(event)
  }
}
