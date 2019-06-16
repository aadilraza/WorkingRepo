import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePropertyPage1Component } from './single-property-page-1.component';

describe('SinglePropertyPage1Component', () => {
  let component: SinglePropertyPage1Component;
  let fixture: ComponentFixture<SinglePropertyPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePropertyPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePropertyPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
