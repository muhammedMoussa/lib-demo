import { OnInit, AfterViewInit } from "@angular/core";
import { Observable } from 'rxjs';
import { TvmazeService } from './tvmaze.service';
export declare class PosterComponent implements OnInit, AfterViewInit {
    private tvmaze;
    showId: number;
    posterUrl$: Observable<string>;
    constructor(tvmaze: TvmazeService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
