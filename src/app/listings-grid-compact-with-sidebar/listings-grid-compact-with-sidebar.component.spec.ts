import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsGridCompactWithSidebarComponent } from './listings-grid-compact-with-sidebar.component';

describe('ListingsGridCompactWithSidebarComponent', () => {
  let component: ListingsGridCompactWithSidebarComponent;
  let fixture: ComponentFixture<ListingsGridCompactWithSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsGridCompactWithSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsGridCompactWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
