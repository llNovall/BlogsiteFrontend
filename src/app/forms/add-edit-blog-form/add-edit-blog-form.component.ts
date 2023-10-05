import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { TagsCheckboxModel } from 'src/app/models/checkbox/tags-checkbox-model';
import { DashboardFormState } from 'src/app/models/enums/dashboardFormState';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-add-edit-blog-form',
  templateUrl: './add-edit-blog-form.component.html',
  styleUrls: ['./add-edit-blog-form.component.scss'],
})
export class AddEditBlogFormComponent implements OnInit {
  tagsCheckboxDatas: Array<TagsCheckboxModel> = [];

  @Input({ required: true }) mode: DashboardFormState = DashboardFormState.add;
  @Input() blog: Blog = {
    id: '',
    title: '',
    imageUrl: '',
    tags: [],
    content: '',
    createdAt: new Date(),
    editedAt: new Date(),
    isFeatured: false,
    views: 0,
  };
  @Input({ required: true }) backNavigation: string = '';
  @Output() submitOut = new EventEmitter<Blog>();

  constructor(private router: Router, private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.getAllTags().subscribe((val) => {
      val.forEach((element) => {
        this.tagsCheckboxDatas.push({
          tag: element,
          isChecked: this.blog.tags.findIndex((c) => c.id === element.id) > -1,
        });
      });
    });
  }

  onChange(tag: Tag, isChecked: boolean) {
    const index = this.tagsCheckboxDatas.findIndex((c) => c.tag.id == tag.id);
    this.tagsCheckboxDatas[index].isChecked = isChecked;

    if (isChecked) {
      if (this.blog.tags.findIndex((c) => c.id === tag.id) === -1)
        this.blog.tags.push(tag);
    } else {
      const index: number = this.blog.tags.findIndex((c) => c.id === tag.id);
      this.blog.tags.splice(index, 1);
    }

    console.log(this.blog.tags);
  }

  onSubmit(): void {
    if (this.mode == DashboardFormState.add) {
      this.blog.createdAt = new Date(Date.now());
    }

    if (this.mode == DashboardFormState.edit) {
      this.blog.editedAt = new Date(Date.now());
    }

    this.submitOut.emit(this.blog);
  }

  onBack(): void {
    this.router.navigate([this.backNavigation]);
  }
}
