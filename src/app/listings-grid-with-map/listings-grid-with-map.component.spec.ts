import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsGridWithMapComponent } from './listings-grid-with-map.component';

describe('ListingsGridWithMapComponent', () => {
  let component: ListingsGridWithMapComponent;
  let fixture: ComponentFixture<ListingsGridWithMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsGridWithMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsGridWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
