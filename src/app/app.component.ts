import { Component, OnInit } from '@angular/core';
import { TagsService } from './services/tags.service';
import { RetryConfig, debounce, delay, interval, retry, retryWhen } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blogsite';

  isAPIAvailable: boolean = false;
  constructor(private blogTagsService: TagsService) {}

  ngOnInit(): void {

    let retryConfig : RetryConfig = {count: 50, delay: 5000, resetOnSuccess : false}

    this.blogTagsService
      .getAllTags()
      .pipe(retry(retryConfig), )
      .subscribe(
        {
          error:() => {
            this.isAPIAvailable = false;
          },

          complete: () => {
            this.isAPIAvailable = true;
          }
        }
      );
  }
}
