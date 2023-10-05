import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectsPageComponent } from './manage-projects-page.component';

describe('ManageProjectsPageComponent', () => {
  let component: ManageProjectsPageComponent;
  let fixture: ComponentFixture<ManageProjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProjectsPageComponent]
    });
    fixture = TestBed.createComponent(ManageProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
