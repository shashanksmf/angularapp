import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthoLoginComponent } from './ortho-login.component';

describe('OrthoLoginComponent', () => {
  let component: OrthoLoginComponent;
  let fixture: ComponentFixture<OrthoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
