import { Component, OnInit,trigger, state, style, transition, animate, Input, Output,EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ShareDataService } from "../share-data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AsideComponent} from "../aside/aside.component"
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
  message: string;
  sideBarIsOpened = false;
  menuState2:string='in';
  constructor(private modalService: NgbModal,private data: ShareDataService,public AsideComponent:AsideComponent,public BrowserAnimationsModule:BrowserAnimationsModule) { }
  closeModal(): void{
       let localModalRef = this.modalRef;
       localModalRef.close();
   }
   newMessage() {
     //his.toggleMenu();
      this.data.changeMessage("Hello from Sibling")
    }
  open(modalPro) {
    this.AsideComponent.toggleMenu();
    this.newMessage();
    this.data.currentMessage.subscribe(message => this.message = "hello")
    this.sideBarIsOpened=!this.sideBarIsOpened;
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
    @Output() userEv = new EventEmitter<string>();
  sidebar(){
    if(this.menuState2=='out'){
      this.menuState2="in";
    }
    else{
        this.menuState2="out";
    }
    console.log("inside side bar",this.menuState2);
    this.userEv.emit(this.menuState2)
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
