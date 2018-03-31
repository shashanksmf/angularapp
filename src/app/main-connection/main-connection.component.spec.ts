import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConnectionComponent } from './main-connection.component';

describe('MainConnectionComponent', () => {
  let component: MainConnectionComponent;
  let fixture: ComponentFixture<MainConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
