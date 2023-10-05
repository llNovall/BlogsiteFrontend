import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { DashboardFormState } from 'src/app/models/enums/dashboardFormState';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-edit-blog-page',
  templateUrl: './edit-blog-page.component.html',
  styleUrls: ['./edit-blog-page.component.scss'],
})
export class EditBlogPageComponent {
  state: DashboardFormState = DashboardFormState.edit;
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

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {}

  ngOnInit(): void {
    let blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blogsService.getBlog(blogId).subscribe((c) => (this.blog = c));
    }
  }

  onEdit(blog: Blog): void {
    this.blogsService.editBlog(blog);
  }
}
