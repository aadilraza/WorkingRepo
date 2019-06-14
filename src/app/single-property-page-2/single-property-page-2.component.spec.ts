import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePropertyPage2Component } from './single-property-page-2.component';

describe('SinglePropertyPage2Component', () => {
  let component: SinglePropertyPage2Component;
  let fixture: ComponentFixture<SinglePropertyPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePropertyPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePropertyPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
