import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardFormState } from 'src/app/models/enums/dashboardFormState';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-projects-page',
  templateUrl: './edit-projects-page.component.html',
  styleUrls: ['./edit-projects-page.component.scss']
})
export class EditProjectsPageComponent {

  mode : DashboardFormState = DashboardFormState.edit;
  project : Project = {id: "" , projectName : "", projectDescription: "", projectLink : ""};
  project$: Observable<Project> | undefined;

  constructor(private route: ActivatedRoute, private projectsService : ProjectsService){}

  ngOnInit(): void {
    let projectId = this.route.snapshot.paramMap.get('id');
    if(projectId){
      this.project$ = this.projectsService.getProject(projectId);
      this.project$.subscribe(c=> {this.project = c; console.log(this.project);});
    }
  }

  onEdit(project : Project): void {
    this.projectsService.editProject(project);
  }
}
