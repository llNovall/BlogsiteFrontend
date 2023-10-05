import { Component } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';
@Component({
  selector: 'app-add-tag-page',
  templateUrl: './add-tag-page.component.html',
  styleUrls: ['./add-tag-page.component.scss']
})
export class AddTagPageComponent {

  constructor(private tagsService: TagsService){}

  onAdd(tag : Tag) : void{
    this.tagsService.addTag(tag);
  }
}
