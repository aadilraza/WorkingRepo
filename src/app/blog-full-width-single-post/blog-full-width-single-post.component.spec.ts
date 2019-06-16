import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFullWidthSinglePostComponent } from './blog-full-width-single-post.component';

describe('BlogFullWidthSinglePostComponent', () => {
  let component: BlogFullWidthSinglePostComponent;
  let fixture: ComponentFixture<BlogFullWidthSinglePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullWidthSinglePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullWidthSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
