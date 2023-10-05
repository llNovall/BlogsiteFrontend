import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogsPageComponent } from './manage-blogs-page.component';

describe('ManageBlogsPageComponent', () => {
  let component: ManageBlogsPageComponent;
  let fixture: ComponentFixture<ManageBlogsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBlogsPageComponent]
    });
    fixture = TestBed.createComponent(ManageBlogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
