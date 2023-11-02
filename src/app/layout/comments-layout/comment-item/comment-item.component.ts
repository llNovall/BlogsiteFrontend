import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BlogComment } from 'src/app/models/blog-comment';
import { BlogCommentsService } from 'src/app/services/blog-comments.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input({ required: true }) blogComment!: BlogComment;
  @Input() parentCommentId: string = '';
  @Input() showReplies: boolean = false;

  replies: BlogComment[] = [];

  reply: boolean = false;

  constructor(private blogCommentsService: BlogCommentsService) {}

  ngOnInit(): void {
    this.blogCommentsService
      .getComments(this.blogComment.blogId, this.blogComment.id)
      .subscribe((data) => {
        this.replies = data;
      });
  }

  getNumReplies(): number {
    return this.replies.length;
  }

  onReply() {
    this.reply = !this.reply;
  }

  showMoreReplies(){
    this.showReplies = true;
  }
}
