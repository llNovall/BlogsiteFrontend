import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent {
@Input({required:true}) blog : Blog ={id: '', title: '', imageUrl: '', tags: [], content: '', createdAt: new Date(), editedAt: new Date(), isFeatured: false, views: 0};


}
