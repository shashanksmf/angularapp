import { Component, OnInit, trigger, state, style, transition, animate, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d( -100%,0 ,0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  modalRef: NgbModalRef;
  closeResult: string;
  num:number=0;
  constructor(private modalService: NgbModal) { }
  closeModal(): void{
       let localModalRef = this.modalRef;
       localModalRef.close();
   }
  openModal(modalPro) {
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
  //  this.closeModal();
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
  ngOnInit() {
  }
  isShow: string = "none";
  isNewMesage: string = "none";
  isNotification: string = "none";
  menuState: string = 'out';
  state1: string = 'inactive';

  toggleMenu() {
    console.log("clicked");
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  changeDropdown() {
    if (this.isShow == "none") {
      this.isShow = "block";
      this.isNewMesage = "none";
      this.isNotification = "none";
    }
    else {
      this.isShow = "none";
    }
  }
  openbenifitModal(benifitmodalPro) {
    this.closeModal();
    const modalRef = this.modalService.open(benifitmodalPro);
  }
  message: string;
  receiveMessage($event) {
    this.message = $event
    this.toggleMenu();
    // console.log(this.message);
  }
  checkforfirst(modalPro){
    this.num++;
    if(this.num==1){
      this.openModal(modalPro);
    }

  }
}
