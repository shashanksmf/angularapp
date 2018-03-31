import { Component, OnInit,trigger, state, style, transition, animate,Output,Input, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-connect',
  templateUrl: './info-connect.component.html',
  styleUrls: ['./info-connect.component.scss'],
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
export class InfoConnectComponent implements OnInit {
  menuState='out';
  secondTabCss:string='info-connect__tab scroll-fix scroll-fix--mrg fade';
  firstTabCss:string='info-connect__tab scroll-fix scroll-fix--mrg fade';
  first:string='ui-tabs__tab active';
  second:string='ui-tabs__tab ui-tabs__tab--disable';
  arrGroup=[
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
    {'src':'../assets/images/icon_search.png','first':'Банковская сфера','second':'НарДепПроБанк','desc':'Главный отдел Финансы и Кредиты, Старший менеджер'},
  ];
  constructor() { }
  @Input() infoConect;

  @Output() infoConnectEvent = new EventEmitter<string>();
  isClose="out";
  ngOnInit() {
    this.firstTab();
  }
  close(){
    this.infoConnectEvent.emit(this.isClose)
  }
  firstTab(){
    this.first='ui-tabs__tab active';
    this.second='ui-tabs__tab ui-tabs__tab--disable';

    this.secondTabCss='info-connect__tab scroll-fix scroll-fix--mrg fade';
    this.firstTabCss='info-connect__tab scroll-fix scroll-fix--mrg fade show active';
  }
  secondTab(){
    this.first='ui-tabs__tab ui-tabs__tab--disable ';
    this.second='ui-tabs__tab active';
    this.firstTabCss='info-connect__tab scroll-fix scroll-fix--mrg fade';
    this.secondTabCss='info-connect__tab scroll-fix scroll-fix--mrg fade show active';
  }
}
