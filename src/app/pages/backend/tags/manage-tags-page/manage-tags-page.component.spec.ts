import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTagsPageComponent } from './manage-tags-page.component';

describe('ManageTagsPageComponent', () => {
  let component: ManageTagsPageComponent;
  let fixture: ComponentFixture<ManageTagsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTagsPageComponent]
    });
    fixture = TestBed.createComponent(ManageTagsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
