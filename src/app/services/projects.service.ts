import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  readonly _baseUrl = environment.API_URL + '/Project';

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this._baseUrl);
  }

  getProject(id: string): Observable<Project> {
    return this.httpClient.get<Project>(this._baseUrl + `/${id}`);
  }

  addProject(project: Project) {
    this.httpClient.post(this._baseUrl, project)
      .subscribe(data => {
        this.router.navigate(['dashboard/projects']);
      });
  }

  editProject(project: Project) {
    this.httpClient.put<Project>(this._baseUrl, project)
      .subscribe(data => {
        this.router.navigate(['dashboard/projects']);
      });
  }

  deleteProject(project: Project) {
    this.httpClient.delete<Project>(this._baseUrl + `/${project.id}`)
      .subscribe(data => {
      });
  }
}
