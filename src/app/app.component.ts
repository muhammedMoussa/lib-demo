import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { TvmazeService } from 'tvmaze'
@Component({
  selector: 'ld-root',
  template: `
    <tm-poster [showId]="336"></tm-poster>
    <pre>{{ show$ | async | json}}</pre>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show$: Observable<any>;

  constructor(private tvmaze: TvmazeService) {
    this.show$ = this.tvmaze.getShow(336);
  }

}
