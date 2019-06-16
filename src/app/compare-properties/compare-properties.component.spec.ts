import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePropertiesComponent } from './compare-properties.component';

describe('ComparePropertiesComponent', () => {
  let component: ComparePropertiesComponent;
  let fixture: ComponentFixture<ComparePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
