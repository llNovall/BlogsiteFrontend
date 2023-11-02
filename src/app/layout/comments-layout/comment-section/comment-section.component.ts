import { Component, Input } from '@angular/core';
import { BlogComment } from 'src/app/models/blog-comment';
import { BlogCommentsService } from 'src/app/services/blog-comments.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent {

  @Input({required : true}) blogComments!: BlogComment[];

  constructor(private blogCommentsService : BlogCommentsService){}


}
