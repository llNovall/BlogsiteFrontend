import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tags: Array<Tag> = [];

  isSticky: boolean = false;

  constructor(private tagsService: TagsService) {}
  ngOnInit(): void {
    this.tagsService.getAllTags().subscribe((c) => (this.tags = c));
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    try {
      const scrollTopVal = event.target.scrollingElement.scrollTop;
      this.isSticky = scrollTopVal >= 100;
    } catch {}
  };
}
