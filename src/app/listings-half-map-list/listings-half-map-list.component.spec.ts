import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsHalfMapListComponent } from './listings-half-map-list.component';

describe('ListingsHalfMapListComponent', () => {
  let component: ListingsHalfMapListComponent;
  let fixture: ComponentFixture<ListingsHalfMapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsHalfMapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsHalfMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
