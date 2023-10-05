import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProjectFormComponent } from './add-edit-project-form.component';

describe('AddEditProjectFormComponent', () => {
  let component: AddEditProjectFormComponent;
  let fixture: ComponentFixture<AddEditProjectFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditProjectFormComponent]
    });
    fixture = TestBed.createComponent(AddEditProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
