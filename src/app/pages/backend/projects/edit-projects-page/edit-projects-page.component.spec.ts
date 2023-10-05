import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectsPageComponent } from './edit-projects-page.component';

describe('EditProjectsPageComponent', () => {
  let component: EditProjectsPageComponent;
  let fixture: ComponentFixture<EditProjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProjectsPageComponent]
    });
    fixture = TestBed.createComponent(EditProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
