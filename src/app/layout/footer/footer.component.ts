import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  copyrightDate: Date;
  observer: ResizeObserver | undefined;
  isPositionFixed: boolean = false;
  constructor() {
    this.copyrightDate = new Date();
  }

  ngOnInit(): void {
    this.observer = new ResizeObserver((e) => {
      this.checkPositionFixedStatus();
    });

    this.observer.observe(document.body);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.unobserve(document.body);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkPositionFixedStatus();
  }

  checkPositionFixedStatus(): void {

    this.isPositionFixed =
      document.body.scrollHeight + 54 < document.documentElement.clientHeight;
  }
}
