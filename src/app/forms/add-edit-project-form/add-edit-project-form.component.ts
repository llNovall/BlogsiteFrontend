import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardFormState } from 'src/app/models/enums/dashboardFormState';
import { Project } from 'src/app/models/project';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-add-edit-project-form',
  templateUrl: './add-edit-project-form.component.html',
  styleUrls: ['./add-edit-project-form.component.scss'],
})
export class AddEditProjectFormComponent {
  @Input({ required: true }) mode: DashboardFormState = DashboardFormState.add;
  @Input() project: Project;
  @Input({ required: true }) backNavigation: string = '';

  @Output() submitOut = new EventEmitter<Project>();

  editorContent: string = '';

  constructor(private router: Router) {
    this.project = {
      id: '',
      projectName: '',
      projectDescription: '',
      projectLink: '',
    };
  }

  onSubmit(): void {
    this.submitOut.emit(this.project);
  }

  onBack(): void {
    this.router.navigate([this.backNavigation]);
  }
}
