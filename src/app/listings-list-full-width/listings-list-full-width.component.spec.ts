import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsListFullWidthComponent } from './listings-list-full-width.component';

describe('ListingsListFullWidthComponent', () => {
  let component: ListingsListFullWidthComponent;
  let fixture: ComponentFixture<ListingsListFullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsListFullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsListFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
