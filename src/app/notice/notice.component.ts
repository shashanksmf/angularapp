import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  noticeArr=[
    {'src':'../assets/images/ava1.jpg','notice_name':'Иванова Иванаа','notice_message':'хочет добавить Вас в свои связи','notice_time':'03 августа в 11:00'},
    {'src':'../assets/images/ava3.jpg','notice_name':'Андрей Лопуха','notice_message':'подтвердил Вас в свои связи','notice_time':'3 часа назад'},
    {'src':'../assets/images/ava1.jpg','notice_name':'Иванова Иванаа','notice_message':'хочет добавить Вас в свои связи','notice_time':'03 августа в 11:00'},
    {'src':'../assets/images/ava1.jpg','notice_name':'Иванова Иванаа','notice_message':'хочет добавить Вас в свои связи','notice_time':'03 августа в 11:00'},
    {'src':'../assets/images/ava1.jpg','notice_name':'Иванова Иванаа','notice_message':'хочет добавить Вас в свои связи','notice_time':'03 августа в 11:00'},
    {'src':'../assets/images/ava1.jpg','notice_name':'Иванова Иванаа','notice_message':'хочет добавить Вас в свои связи','notice_time':'03 августа в 11:00'},
    {'src':'../assets/images/ava1.jpg','notice_name':'Иванова Иванаа','notice_message':'хочет добавить Вас в свои связи','notice_time':'03 августа в 11:00'},
];

  constructor() { }

  ngOnInit() {
  }

}
