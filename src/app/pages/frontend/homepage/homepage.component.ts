import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  featuredBlogs: Blog[] = [];
  blogs: Blog[] = [];

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsService.getAllBlogs().subscribe({
      next: (blogs) => {
        this.blogs = blogs;
        this.featuredBlogs = blogs.filter((c) => c.isFeatured == true);
      },

      error: () => {},
    });
  }

  isThereAFeaturedBlog(): boolean {
    return this.blogs.some((c) => c.isFeatured);
  }

  getBlogId(index: number, blog: Blog) {
    return blog.id;
  }
}
