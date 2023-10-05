import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-manage-tags-page',
  templateUrl: './manage-tags-page.component.html',
  styleUrls: ['./manage-tags-page.component.scss']
})
export class ManageTagsPageComponent implements OnInit {

  tags: Array<Tag> = [];

  constructor(private tagsService: TagsService){

  }

  ngOnInit(): void {
    this.tagsService.getAllTags().subscribe(val => {
      this.tags = val;
    })
  }

  onDelete(index: number, tag: Tag): void {
    this.tags.splice(index, 1);
    this.tagsService.deleteTag(tag);
  }
}
