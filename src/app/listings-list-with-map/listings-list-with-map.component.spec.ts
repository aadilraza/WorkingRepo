import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsListWithMapComponent } from './listings-list-with-map.component';

describe('ListingsListWithMapComponent', () => {
  let component: ListingsListWithMapComponent;
  let fixture: ComponentFixture<ListingsListWithMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsListWithMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsListWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
