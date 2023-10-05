import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit{
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService){}
  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe(c=> this.projects = c);
  }
}
