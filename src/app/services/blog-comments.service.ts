import { Injectable } from '@angular/core';
import { BlogComment } from '../models/blog-comment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogCommentsService {

  readonly _baseUrl = environment.API_URL + '/BlogComment';

  constructor(private httpClient: HttpClient) {}

  addComment(blogComment : BlogComment): Observable<any>{
    return this.httpClient.post(this._baseUrl, blogComment);
  }

  getComments(blogId: string, parentCommentId: string | null = null): Observable<BlogComment[]>{
    let params = new HttpParams();
    params = params.append('blogId', blogId);

    if(parentCommentId)
      params = params.append('parentCommentId', parentCommentId);

    console.log(params);
    return this.httpClient.get<BlogComment[]>(this._baseUrl, {params: params});
  }
}
