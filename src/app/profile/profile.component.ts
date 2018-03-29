import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileObj:any={
      'name':"Иванов Иван",'email':'pupkin@ivan.ivan','country':'Россия','city':'Москва','status':'Менеджер',
    'dob':'21 / 04 / 1992','floor':'Мужчина','phone':'+389423455234','image':'https://habrastorage.org/getpro/moikrug/uploads/user/100/008/872/6/avatar/medium_4e85f5b23f494375835e8d4091c9601e.png',
    'placesOfWork':{'profiledist':'Название компании','profiledist1':'Это название компании','mainjob':'site.ru','date':'с 04.03.2017 по 04.03.2017 (1 год)'},
    'Seekingcommunication':{'details':'Название компании:Краткое описание с ограниченным чем-то там'},
    'iHaveConnections':{'details':'Краткое описание с ограниченным чем-то там'}
    };
  constructor(private modalService: NgbModal) { }
  closeResult: string;

  ngOnInit() {
  }
  open(content) {
   // this.activeModal.dismiss();
    this.modalService.open(content).result.then((result) => {
      console.log(result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(reason);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
