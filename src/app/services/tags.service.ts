import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Tag } from '../models/tag';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  
  readonly _baseUrl = environment.API_URL + '/Tag';

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this._baseUrl);
  }

  getTag(id: string): Observable<Tag> {
    return this.httpClient.get<Tag>(this._baseUrl + `/${id}`);
  }

  addTag(tag: Tag) {
    this.httpClient.post(this._baseUrl, tag)
      .subscribe(data => {
        this.router.navigate(['dashboard/tags']);
      });
  }

  editTag(tag: Tag) {
    this.httpClient.put<Tag>(this._baseUrl, tag)
      .subscribe(data => {
        this.router.navigate(['dashboard/tags']);
      });
  }

  deleteTag(tag: Tag) {
    this.httpClient.delete<Tag>(this._baseUrl + `/${tag.id}`)
      .subscribe(data => {
      });
  }

}
