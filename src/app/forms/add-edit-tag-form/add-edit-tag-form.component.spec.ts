import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTagFormComponent } from './add-edit-tag-form.component';

describe('AddEditTagFormComponent', () => {
  let component: AddEditTagFormComponent;
  let fixture: ComponentFixture<AddEditTagFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTagFormComponent]
    });
    fixture = TestBed.createComponent(AddEditTagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
