import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postedAgo',
})
export class PostedAgoPipe implements PipeTransform {
  agoTexts: Map<number, string>;
  constructor() {
    this.agoTexts = new Map<number, string>();
    this.agoTexts.set(315336000, 'year');
    this.agoTexts.set(259200, 'month');
    this.agoTexts.set(86400, 'day');
    this.agoTexts.set(3600, 'hour');
    this.agoTexts.set(60, 'minute');
    this.agoTexts.set(1, 'second');
  }

  transform(value: Date, args?: any): string {
    let returnText: string = 'Something went wrong';

    if (!value) return returnText;

    const elapsedTimeInSeconds: number = Math.floor(
      (+new Date() - +new Date(value)) / 1000
    );

    if (elapsedTimeInSeconds < 30) return 'Just now';

    for (let agoText of this.agoTexts) {
      if (agoText[0] < elapsedTimeInSeconds) {
        let convertedTime: number = Math.floor(
          elapsedTimeInSeconds / agoText[0]
        );

        if (convertedTime === 1) {
          returnText = `${convertedTime} ${agoText[1]} ago`;
        } else {
          returnText = `${convertedTime} ${agoText[1]}s ago`;
        }

        break;
      }
    }

    return returnText;
  }
}
