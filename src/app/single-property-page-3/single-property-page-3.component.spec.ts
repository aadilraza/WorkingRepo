import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePropertyPage3Component } from './single-property-page-3.component';

describe('SinglePropertyPage3Component', () => {
  let component: SinglePropertyPage3Component;
  let fixture: ComponentFixture<SinglePropertyPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePropertyPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePropertyPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
