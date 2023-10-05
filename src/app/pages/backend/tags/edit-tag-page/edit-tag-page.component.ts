import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-edit-tag-page',
  templateUrl: './edit-tag-page.component.html',
  styleUrls: ['./edit-tag-page.component.scss']
})
export class EditTagPageComponent implements OnInit {

  tag: Tag = { id: "", tagName: "" };
  tag$: Observable<Tag> | undefined;

  constructor(private route: ActivatedRoute, private tagsService: TagsService) { }

  ngOnInit(): void {

    let tagId = this.route.snapshot.paramMap.get('id');
    if (tagId) {
      this.tag$ = this.tagsService.getTag(tagId);
      this.tag$.subscribe(c => { this.tag = c; });
    }
  }

  onEdit(tag: Tag): void {
    this.tagsService.editTag(tag);
  }
}
