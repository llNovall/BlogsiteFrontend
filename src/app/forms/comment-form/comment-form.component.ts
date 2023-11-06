import { Component, Input, OnInit } from '@angular/core';
import { BlogComment } from 'src/app/models/blog-comment';
import { BlogCommentsService } from 'src/app/services/blog-comments.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent {
  @Input() commentFormTitle: string = 'Leave a Comment';

  @Input({ required: true }) blogId!: string;

  @Input() parentCommentId!: string | null;

  isAddingComment: boolean = false;

  blogComment: BlogComment;

  constructor(private blogCommentsService: BlogCommentsService, ) {
    this.blogComment = {
      id: '',
      sender: '',
      commentBody: '',
      blogId: '',
      parentCommentId: '',
      createdAt: new Date(),
    };
  }

  onSubmit() {
    this.blogComment.blogId = this.blogId;
    this.blogComment.parentCommentId = this.parentCommentId;

    console.log(this.blogComment);
    this.isAddingComment = true;
    this.blogCommentsService
      .addComment(this.blogComment)
      .subscribe(
        {
          next:() =>{
            this.isAddingComment = false;
            location.reload();
          },

          error:() =>{
            this.isAddingComment = false;
          }
        });
  }
}
