import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.scss']
})
export class AsideLeftComponent implements OnInit {
   tab1css:string='ui-tabs__tab active';
   tab2css:string='ui-tabs__tab';
   tab1ContentCss:string='tab-pane active';
   tab2ContentCss:string='tab-pane';
  constructor() { }

  ngOnInit() {
    this.tab1css='ui-tabs__tab active';
    this.tab2css='ui-tabs__tab';
  }
  tab1Active(){
    this.tab2css='ui-tabs__tab ';
    this.tab1css='ui-tabs__tab active';
    this.tab1ContentCss='tab-pane active';
    this.tab2ContentCss='tab-pane ';
  }
  tab2Active(){
    this.tab2css='ui-tabs__tab active';
    this.tab1css='ui-tabs__tab ';
    this.tab2ContentCss='tab-pane active';
    this.tab1ContentCss='tab-pane ';
  }
}
