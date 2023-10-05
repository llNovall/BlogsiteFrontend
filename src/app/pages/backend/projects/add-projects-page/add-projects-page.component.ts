import { Component } from '@angular/core';
import { DashboardFormState } from 'src/app/models/enums/dashboardFormState';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-projects-page',
  templateUrl: './add-projects-page.component.html',
  styleUrls: ['./add-projects-page.component.scss']
})
export class AddProjectsPageComponent {

  mode : DashboardFormState  = DashboardFormState.add;

  constructor(private projectsService: ProjectsService){}

  onAdd(project : Project) : void{
    this.projectsService.addProject(project);
  }
}
