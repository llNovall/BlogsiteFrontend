import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { DashboardFormState } from 'src/app/models/enums/dashboardFormState';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.scss']
})
export class AddBlogPageComponent {

  state : DashboardFormState = DashboardFormState.add;
  constructor(private blogsService: BlogsService){}


  onAdd(blog : Blog) : void{
    this.blogsService.addBlog(blog);
  }
}
