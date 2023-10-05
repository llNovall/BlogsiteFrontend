import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-manage-projects-page',
  templateUrl: './manage-projects-page.component.html',
  styleUrls: ['./manage-projects-page.component.scss']
})
export class ManageProjectsPageComponent {
  
  projects: Array<Project> = [];

  constructor(private projectsService: ProjectsService){

  }
  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe(val => {
      this.projects = val;
    })
  }

  onDelete(index: number, project: Project): void {
    this.projects.splice(index, 1);
    this.projectsService.deleteProject(project);
  }
}
