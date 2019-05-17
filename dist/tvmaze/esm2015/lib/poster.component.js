/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { map } from 'rxjs/operators';
import { TvmazeService } from './tvmaze.service';
export class PosterComponent {
    /**
     * @param {?} tvmaze
     */
    constructor(tvmaze) {
        this.tvmaze = tvmaze;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.posterUrl$ = this.tvmaze
            .getShow(this.showId)
            .pipe(map((/**
         * @param {?} show
         * @return {?}
         */
        show => show.image.medium)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.posterUrl$.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => console.log(res)));
    }
}
PosterComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
PosterComponent.ctorParameters = () => [
    { type: TvmazeService }
];
PosterComponent.propDecorators = {
    showId: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PosterComponent.prototype.showId;
    /** @type {?} */
    PosterComponent.prototype.posterUrl$;
    /**
     * @type {?}
     * @private
     */
    PosterComponent.prototype.tvmaze;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3R2bWF6ZS8iLCJzb3VyY2VzIjpbImxpYi9wb3N0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWtCakQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFJeEIsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7SUFFN0MsUUFBUTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU07YUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDcEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0lBQ3ZELENBQUM7OztZQTlCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7O0tBR1Q7eUJBQ1E7Ozs7Ozs7S0FPUjthQUNKOzs7O1lBaEJRLGFBQWE7OztxQkFtQmpCLEtBQUs7Ozs7SUFBTixpQ0FBd0I7O0lBQ3hCLHFDQUErQjs7Ozs7SUFFbkIsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVHZtYXplU2VydmljZSB9IGZyb20gJy4vdHZtYXplLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RtLXBvc3RlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGltZyAqbmdJZj1cInBvc3RlclVybCQgfCBhc3luYyBhcyBzcmNcIiBbc3JjXT1cInNyY1wiIGFsdD1cInBvc3Rlci4uXCIvPlxuICAgICAgICA8cD5JJ20gV29ya2luZyDwn5GMPC9wPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIFBvc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgc2hvd0lkOiBudW1iZXI7XG4gICAgcG9zdGVyVXJsJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0dm1hemU6IFR2bWF6ZVNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3N0ZXJVcmwkID0gdGhpcy50dm1hemVcbiAgICAgICAgICAgIC5nZXRTaG93KHRoaXMuc2hvd0lkKVxuICAgICAgICAgICAgLnBpcGUobWFwKHNob3cgPT4gc2hvdy5pbWFnZS5tZWRpdW0pKVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5wb3N0ZXJVcmwkLnN1YnNjcmliZShyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XG4gICAgfVxufSJdfQ==