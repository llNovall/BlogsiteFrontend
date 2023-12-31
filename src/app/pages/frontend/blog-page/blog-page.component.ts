import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogComment } from 'src/app/models/blog-comment';
import { BlogCommentsService } from 'src/app/services/blog-comments.service';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent {
  blog: Blog = {
    id: '',
    title: '',
    imageUrl: '',
    tags: [],
    content: '',
    createdAt: new Date(),
    editedAt: new Date(),
    isFeatured: false,
    views: 0,
  };

  blogComments: BlogComment[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private blogCommentsService: BlogCommentsService
  ) {}

  ngOnInit(): void {
    let blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blogsService.getBlog(blogId).subscribe((c) => {
        this.blog = c;
        this.blogsService.addViewToBlog(this.blog.id, 1);
      });

      this.blogCommentsService.getComments(blogId).subscribe((data) => {
        this.blogComments = data;
      });
    }
  }
}
