import { Component, OnInit,trigger, state, style, transition, animate, Input, Output,EventEmitter } from '@angular/core';
import { ShareDataService } from "../share-data.service";
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-connection',
  templateUrl: './main-connection.component.html',
  styleUrls: ['./main-connection.component.scss'],
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
export class MainConnectionComponent implements OnInit {
  menuState: string = 'out';
  menuState1: string = 'out';
  menuArr=[];
  constructor(private modalService: NgbModal) { }
  item={'src':'../assets/images/icon_connect.png','first':'Отрасль','second':'Сегмент','third':'Название компании','ind_desc':'Краткое описание чего-то там с ограничением<','btn_desc':'НАПИСАТЬ'};

  ngOnInit() {
    this.printContent();
  }
  printContent(){
    for(var i = 1; i <= 15; i++){
       this.menuArr.push(this.item);
    }
  }
  @Output() infoContent = new EventEmitter<string>();
  sidebar='false';
    state1: string = 'inactive';
    modalRef: NgbModalRef;
    closeResult: string;
  clickEvent(){

  }
  openModal(modalPro) {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    console.log(this.menuState);
    this.infoContent.emit(this.menuState)
    // this.closeModal();
    this.state1 = "active";
    this.modalRef = this.modalService.open(modalPro);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // this.modalService.open(modalPro).result.then((result) => {
    //    this.closeResult = `Closed with: ${result}`;
    //  }, (reason) => {
    //    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //  });
    // const modalRef = this.modalService.open(modalPro);
  }
  openModal1(modalPro) {
    this.closeModal();
    this.state1 = "active";
    this.modalRef = this.modalService.open(modalPro);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // this.modalService.open(modalPro).result.then((result) => {
    //    this.closeResult = `Closed with: ${result}`;
    //  }, (reason) => {
    //    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //  });
    // const modalRef = this.modalService.open(modalPro);
  }
  private getDismissReason(reason: any): string {
    this.state1 = "inactive";
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  openbenifitModal(benifitmodalPro) {
    this.closeModal();
    const modalRef = this.modalService.open(benifitmodalPro);
  }
  closeModal(): void{
       let localModalRef = this.modalRef;
       localModalRef.close();
   }
   receiveUser($event){

     this.menuState=$event;
   }
}
