import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogPageComponent } from './edit-blog-page.component';

describe('EditBlogPageComponent', () => {
  let component: EditBlogPageComponent;
  let fixture: ComponentFixture<EditBlogPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBlogPageComponent]
    });
    fixture = TestBed.createComponent(EditBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
