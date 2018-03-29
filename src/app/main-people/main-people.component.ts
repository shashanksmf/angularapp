import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-people',
  templateUrl: './main-people.component.html',
  styleUrls: ['./main-people.component.scss']
})
export class MainPeopleComponent implements OnInit {


  ngOnInit() {
  }
  industryArr:Array<any>=[
    {name:"Отрасль",name1:"Сегмент",extra:" Название компании",description:"Краткое описание чего-то там с ограничением",image:'../../assets/images/ava3.jpg'},
    {name:"Отрасль",name1:"Сегмент",extra:" Название компании",description:"Краткое описание чего-то там с ограничением",image:'../../assets/images/ava3.jpg'},
    {name:"Отрасль",name1:"Сегмент",extra:" Название компании",description:"Краткое описание чего-то там с ограничением",image:'../../assets/images/ava3.jpg'},
    {name:"Отрасль",name1:"Сегмент",extra:" Название компании",description:"Краткое описание чего-то там с ограничением",image:'../../assets/images/ava3.jpg'},
    {name:"Отрасль",name1:"Сегмент",extra:" Название компании",description:"Краткое описание чего-то там с ограничением",image:'../../assets/images/ava3.jpg'},
    {name:"Отрасль",name1:"Сегмент",extra:" Название компании",description:"Краткое описание чего-то там с ограничением",image:'../../assets/images/ava3.jpg'},
  ];

  modalRef: NgbModalRef;
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  closeModal(): void{
       let localModalRef = this.modalRef;
       localModalRef.close();
   }
  open(modalPro) {
    // this.closeModal();
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
    console.log("inside openmodal 1");
    this.closeModal();
    this.modalRef = this.modalService.open(modalPro);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
