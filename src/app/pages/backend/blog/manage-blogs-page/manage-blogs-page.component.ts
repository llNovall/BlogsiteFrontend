import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-manage-blogs-page',
  templateUrl: './manage-blogs-page.component.html',
  styleUrls: ['./manage-blogs-page.component.scss']
})
export class ManageBlogsPageComponent {
  blogs: Array<Blog> = [];

  constructor(private blogsService: BlogsService) {

  }
  ngOnInit(): void {
    this.blogsService.getAllBlogs().subscribe(val => {
      this.blogs = val;
      console.log(this.blogs);
    })
  }

  onDelete(index: number, blog: Blog): void {
    this.blogs.splice(index, 1);
    this.blogsService.deleteBlog(blog);
  }
}
