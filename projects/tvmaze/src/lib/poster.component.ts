import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TvmazeService } from './tvmaze.service';

@Component({
    selector: 'tm-poster',
    template: `
        <img *ngIf="posterUrl$ | async as src" [src]="src" alt="poster.."/>
        <p>I'm Working 👌</p>
    `,
    styles: [`
        :host {
            display: inline-block;
            overflow: hidden;
            border-radius: 4px;
            line-height: 0;
        }
    `]
})

export class PosterComponent implements OnInit, AfterViewInit {
    @Input() showId: number;
    posterUrl$: Observable<string>;

    constructor(private tvmaze: TvmazeService) {}

    ngOnInit(): void {
        this.posterUrl$ = this.tvmaze
            .getShow(this.showId)
            .pipe(map(show => show.image.medium))
    }

    ngAfterViewInit() {
        this.posterUrl$.subscribe(res => console.log(res));
    }
}