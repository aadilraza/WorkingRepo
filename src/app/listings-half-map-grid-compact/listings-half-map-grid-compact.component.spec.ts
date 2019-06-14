import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsHalfMapGridCompactComponent } from './listings-half-map-grid-compact.component';

describe('ListingsHalfMapGridCompactComponent', () => {
  let component: ListingsHalfMapGridCompactComponent;
  let fixture: ComponentFixture<ListingsHalfMapGridCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsHalfMapGridCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsHalfMapGridCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
