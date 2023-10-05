import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBlogFormComponent } from './add-edit-blog-form.component';

describe('AddEditBlogFormComponent', () => {
  let component: AddEditBlogFormComponent;
  let fixture: ComponentFixture<AddEditBlogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditBlogFormComponent]
    });
    fixture = TestBed.createComponent(AddEditBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
