import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {

  @Input({required : true}) blog : Blog = {id: '', title: '', imageUrl: '', tags: [], content: '', createdAt: new Date(), editedAt: new Date(), isFeatured: false, views: 0}
  @Input() showImage : boolean = false;
  @Input() navigationTitle : string = '';

}
