import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsHalfMapGridStandardComponent } from './listings-half-map-grid-standard.component';

describe('ListingsHalfMapGridStandardComponent', () => {
  let component: ListingsHalfMapGridStandardComponent;
  let fixture: ComponentFixture<ListingsHalfMapGridStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsHalfMapGridStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsHalfMapGridStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
