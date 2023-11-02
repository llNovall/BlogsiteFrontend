import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, shareReplay } from 'rxjs';
import { BlogsByTagsAndYearsRequest } from '../models/services/blogs-by-tags-and-years-request';
import { BlogsAddViewDTO } from '../models/services/blogs-add-view-dto';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  readonly _baseUrl = environment.API_URL + '/Blog';

  constructor(private httpClient: HttpClient, private router: Router) {}

  getAllBlogs(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(this._baseUrl).pipe(shareReplay());
  }

  getBlog(id: string): Observable<Blog> {
    return this.httpClient.get<Blog>(this._baseUrl + `/${id}`);
  }

  getBlogsWithTagsAndYears(
    tagIds: string[],
    years: number[]
  ): Observable<Blog[]> {
    const body: BlogsByTagsAndYearsRequest = { tagIds: tagIds, years: years };

    let result = this.httpClient
      .post<Blog[]>(this._baseUrl + '/FindBlogsByTagsAndYears', body)
      .pipe(
        catchError((er) => {
          return Promise.reject<Blog[]>();
        })
      );

    return result;
  }

  addBlog(Blog: Blog) {
    this.httpClient.post(this._baseUrl, Blog).subscribe((data) => {
      this.router.navigate(['dashboard/blogs']);
    });
  }

  addViewToBlog(blogId: string, viewsToAdd: number) {
    const body: BlogsAddViewDTO = { id: blogId, viewsToAdd: viewsToAdd };

    this.httpClient.post(this._baseUrl + '/AddViewToBlog', body).subscribe();
  }

  editBlog(Blog: Blog) {
    this.httpClient.put<Blog>(this._baseUrl, Blog).subscribe((data) => {
      this.router.navigate(['dashboard/blogs']);
    });
  }

  deleteBlog(Blog: Blog) {
    this.httpClient
      .delete<Blog>(this._baseUrl + `/${Blog.id}`)
      .subscribe((data) => {});
  }
}
