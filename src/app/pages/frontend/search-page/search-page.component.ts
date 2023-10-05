import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { Tag } from 'src/app/models/tag';
import { YearCheckboxModel } from 'src/app/models/checkbox/year-checkbox-model';

import { BlogsService } from 'src/app/services/blogs.service';
import { TagsService } from 'src/app/services/tags.service';
import { TagsCheckboxModel } from 'src/app/models/checkbox/tags-checkbox-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  yearsCheckboxModels: YearCheckboxModel[] = [];
  tagsCheckboxModels: TagsCheckboxModel[] = [];
  searchResults: Blog[] = [];

  constructor(
    private blogsService: BlogsService,
    private tagsService: TagsService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const tagId = this.activateRoute.snapshot.paramMap.get('tagId');

    this.tagsService.getAllTags().subscribe((tags) => {
      const tagsList: Tag[] = tags;
      tags.forEach((t) => {
        let isChecked = t.id === tagId;
        this.tagsCheckboxModels.push({ tag: t, isChecked: isChecked });
      });
    });

    this.blogsService.getAllBlogs().subscribe((blogs) => {
      const yearsList: number[] = blogs.map((p) =>
        new Date(p.createdAt).getFullYear()
      );
      yearsList.forEach((y) =>
        this.yearsCheckboxModels.push({ year: y, isChecked: false })
      );
    });

    this.onSearchOptionsChanged();
  }

  onTagCheckboxChanged(model: TagsCheckboxModel, isChecked: boolean): void {
    model.isChecked = isChecked;
    this.onSearchOptionsChanged();
  }

  onYearCheckboxChanged(model: YearCheckboxModel, isChecked: boolean): void {
    model.isChecked = isChecked;
    this.onSearchOptionsChanged();
  }

  onSearchOptionsChanged() {
    let tagIds: string[] = this.tagsCheckboxModels
      .filter((t) => t.isChecked)
      .map((c) => c.tag.id);
    let years: number[] = this.yearsCheckboxModels
      .filter((t) => t.isChecked)
      .map((c) => c.year);

    this.blogsService
      .getBlogsWithTagsAndYears(tagIds, years)
      .subscribe((c) => (this.searchResults = c));
  }

  getBlogId(index: number, blog: Blog) {
    return blog.id;
  }

  getTagId(index: number, model: TagsCheckboxModel) {
    return model.tag.id;
  }

  getYear(index: number, model: YearCheckboxModel) {
    return model.year;
  }
}
