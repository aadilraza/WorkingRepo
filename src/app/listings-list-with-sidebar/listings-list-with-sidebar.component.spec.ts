import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsListWithSidebarComponent } from './listings-list-with-sidebar.component';

describe('ListingsListWithSidebarComponent', () => {
  let component: ListingsListWithSidebarComponent;
  let fixture: ComponentFixture<ListingsListWithSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsListWithSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsListWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
