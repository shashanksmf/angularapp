import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConnectComponent } from './info-connect.component';

describe('InfoConnectComponent', () => {
  let component: InfoConnectComponent;
  let fixture: ComponentFixture<InfoConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
