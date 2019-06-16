import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsGridStandardWithSidebarComponent } from './listings-grid-standard-with-sidebar.component';

describe('ListingsGridStandardWithSidebarComponent', () => {
  let component: ListingsGridStandardWithSidebarComponent;
  let fixture: ComponentFixture<ListingsGridStandardWithSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsGridStandardWithSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsGridStandardWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
