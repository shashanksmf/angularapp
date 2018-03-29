import { Component, OnInit, trigger, state, style, transition, animate, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from '../notification/notification.component';
import { OnChanges, SimpleChanges } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { AfterContentInit, ElementRef } from '@angular/core';
import { Renderer, RenderComponentType, RootRenderer } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
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

export class ChatComponent {

  public isCollapsed = false;
  menuState: string = 'out';
  message: string;
  chatarr = [];
  peoplearr = [];
  smsText: string = '';

  data: string = '';
  date: any = '';
  senderId: number = 11111;
  peopleArr = [{ id: 1, name: 'Dmitry', message: [], images: './assets/images/ava1.jpg', lastMessage: '' },
  { id: 2, name: 'Dmitry1', message: [], images: './assets/images/ava_big.jpg', lastMessage: '' }, { id: 3, name: 'Dmitry2', message: [], images: './assets/images/ava1.jpg', lastMessage: '' }, { id: 4, name: 'Dmitry3', message: [], images: './assets/images/ava1.jpg', lastMessage: '' }
    , { id: 5, name: 'Dmitry4', message: [], images: './assets/images/ava2.jpg', lastMessage: '' }, { id: 6, name: 'Dmitry5', message: [], images: './assets/images/ava1.jpg', lastMessage: '' }, { id: 7, name: 'Dmitry6', message: [], images: './assets/images/ava1.jpg', lastMessage: '' },
  { id: 8, name: 'Dmitry7', message: [], images: './assets/images/ava1.jpg', lastMessage: '' }];

  receiverName: string = this.peopleArr[0].name;
  senderName: string = 'Василий Мванов';
  lastTime: string = 'был в сети 22 мин. назад';
  senderImage: string = './assets/images/ava1.jpg';
  receiverImage: string = this.peopleArr[0].images;
  // chat1:string=`<div class="chat__item-message">
  //     <div class="avatar avatar--40 avatar--mrg-r15">
  //       <img src="`+this.imagesPath+`">
  //     </div>
  //     <div class="chat__item-message-content">
  //       <div class="chat__item-message-caption">
  //         <span>Петров Петро1</span>,
  //         <span>Предпринематель</span>
  //         <span class="chat__time">21.08.2017</span>
  //       </div>
  //       <div class="chat__item-message-text">
  //         <p>
  //           это сообщение от отправителя</p>
  //       </div>
  //     </div>
  //   </div>`;
  textValue: string = '';
  i: number = 0;
  constructor(elementRef: ElementRef, renderer: Renderer) {
    renderer.listen(elementRef.nativeElement, 'click', (event) => {
      // Do something with 'event'
    })
  }

  //
  //
  // people1=`<div class="chat__item chat__item--active">
  //   <div class="avatar avatar--48 avatar--mrg-r15">
  //     <div class="avatar__status"></div>
  //     <img src="./assets/images/ava1.jpg">
  //   </div>
  //
  //   <div class="chat__user-data">
  //     <div class="chat__user-name">Василий Мванов</div>
  //     <div class="chat__last-message">Привет, есть хорошая...</div>
  //   </div>
  //
  //   <div class="chat__user-time">
  //     <div class="chat__time">12:43</div>
  //     <div class="chat__counter counter counter--24">2</div>
  //   </div>
  // </div>`;
  // people=`<div class="chat__item" (click)='changeChat($event)'>
  //   <div class="avatar avatar--48 avatar--mrg-r15">
  //     <div class="avatar__status"></div>
  //     <img src="./assets/images/ava2.jpg">
  //   </div>
  //
  //   <div class="chat__user-data">
  //     <div class="chat__user-name">Василий Мванов</div>
  //     <div class="chat__last-message">Привет, есть хорошая...</div>
  //   </div>
  //
  //   <div class="chat__user-time">
  //     <div class="chat__time">12:43</div>
  //     <div class="chat__counter counter counter--24">2</div>
  //   </div>
  // </div>`;



  isClose = NotificationComponent;
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  receiveMessage($event) {
    this.message = $event
    this.toggleMenu();
    // console.log(this.message);
  }
  id: number = 1;
  j: number = 0;
  receiveUser($event) {
    console.log($event)
    this.id = $event;
    for (this.j = 0; this.j < this.peopleArr.length; this.j++) {
      if (this.peopleArr[this.j].id == this.id) {
        this.receiverImage = this.peopleArr[this.j].images;
        this.receiverName = this.peopleArr[this.j].name;
        this.chatarr = this.peopleArr[this.j].message;
      }
      if (this.peopleArr[this.j].message.length != 0) {
        this.peopleArr[this.j].lastMessage = this.peopleArr[this.j].message[this.peopleArr[this.j].message.length - 1].senderMsg;
      }
    }
    // this.chat1=`<div class="chat__item-message">
    //     <div class="avatar avatar--40 avatar--mrg-r15">
    //       <img src="`+this.imagesPath+`">
    //     </div>
    //     <div class="chat__item-message-content">
    //       <div class="chat__item-message-caption">
    //         <span>Петров Петро1</span>,
    //         <span>Предпринематель</span>
    //         <span class="chat__time">21.08.2017</span>
    //       </div>
    //       <div class="chat__item-message-text">
    //         <p>
    //           это сообщение от отправителя</p>
    //       </div>
    //     </div>
    //   </div>`

    // console.log(this.message);
  }
  @Output() modalEvent = new EventEmitter<string>();
  @Output() chatData = new EventEmitter<string>();
  @Output() peopleData = new EventEmitter<string>();
  isClose1 = "close";
  close() {
    console.log("close clicked");
    this.modalEvent.emit(this.isClose1)
  }
  ngAfterViewInit() {
    this.changeChat();
  }
  changeChat() {
    console.log("changeChat")
  }
  insertData(title: string) {
    this.date = Date.now();
    this.chatarr.push({ senderMsg: title, date: this.date, senderId: this.senderId, receiveId: this.id, senderName: this.senderName, senderImage: this.senderImage, receiverImage: this.receiverImage });
    this.textValue = '';
    for (this.i = 0; this.i < this.peopleArr.length; this.i++) {
      if (this.peopleArr[this.i].id == this.id) {
        this.peopleArr[this.i].message = this.chatarr;
        console.log(this.peopleArr[this.i])
      }
    }
  }

  ngOnInit() {
    // this.peoplearr.push(this.people1);
    // for(this.i=0;this.i<15;this.i++){
    //   this.peoplearr.push(this.people);
    //     this.peopleData.emit(this.peopleArr)
    //this.chatData.emit(this.arr)
  }

  //
  // this.chatarr.push(this.chat1);
  // this.chatarr.push(this.chat1);
  // this.chatarr.push(this.chat1);
}

 // console.log(this.DataServiceService.get());
