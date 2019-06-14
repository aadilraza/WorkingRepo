import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsGridFullWidthComponent } from './listings-grid-full-width.component';

describe('ListingsGridFullWidthComponent', () => {
  let component: ListingsGridFullWidthComponent;
  let fixture: ComponentFixture<ListingsGridFullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsGridFullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsGridFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
