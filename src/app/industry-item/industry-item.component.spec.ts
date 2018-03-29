import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryItemComponent } from './industry-item.component';

describe('IndustryItemComponent', () => {
  let component: IndustryItemComponent;
  let fixture: ComponentFixture<IndustryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
