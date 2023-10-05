import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectsPageComponent } from './add-projects-page.component';

describe('AddProjectsPageComponent', () => {
  let component: AddProjectsPageComponent;
  let fixture: ComponentFixture<AddProjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProjectsPageComponent]
    });
    fixture = TestBed.createComponent(AddProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
