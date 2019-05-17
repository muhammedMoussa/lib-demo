/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { map } from 'rxjs/operators';
import { TvmazeService } from './tvmaze.service';
var PosterComponent = /** @class */ (function () {
    function PosterComponent(tvmaze) {
        this.tvmaze = tvmaze;
    }
    /**
     * @return {?}
     */
    PosterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.posterUrl$ = this.tvmaze
            .getShow(this.showId)
            .pipe(map((/**
         * @param {?} show
         * @return {?}
         */
        function (show) { return show.image.medium; })));
    };
    /**
     * @return {?}
     */
    PosterComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.posterUrl$.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return console.log(res); }));
    };
    PosterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tm-poster',
                    template: "\n        <img *ngIf=\"posterUrl$ | async as src\" [src]=\"src\" alt=\"poster..\"/>\n        <p>I'm Working \uD83D\uDC4C</p>\n    ",
                    styles: ["\n        :host {\n            display: inline-block;\n            overflow: hidden;\n            border-radius: 4px;\n            line-height: 0;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    PosterComponent.ctorParameters = function () { return [
        { type: TvmazeService }
    ]; };
    PosterComponent.propDecorators = {
        showId: [{ type: Input }]
    };
    return PosterComponent;
}());
export { PosterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3R2bWF6ZS8iLCJzb3VyY2VzIjpbImxpYi9wb3N0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQW9CSSx5QkFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7SUFFN0Msa0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTthQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNwQixJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQWpCLENBQWlCLEVBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7Ozs7SUFFRCx5Q0FBZTs7O0lBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLEVBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkE5QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsb0lBR1Q7NkJBQ1EscUtBT1I7aUJBQ0o7Ozs7Z0JBaEJRLGFBQWE7Ozt5QkFtQmpCLEtBQUs7O0lBY1Ysc0JBQUM7Q0FBQSxBQS9CRCxJQStCQztTQWZZLGVBQWU7OztJQUN4QixpQ0FBd0I7O0lBQ3hCLHFDQUErQjs7Ozs7SUFFbkIsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVHZtYXplU2VydmljZSB9IGZyb20gJy4vdHZtYXplLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RtLXBvc3RlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGltZyAqbmdJZj1cInBvc3RlclVybCQgfCBhc3luYyBhcyBzcmNcIiBbc3JjXT1cInNyY1wiIGFsdD1cInBvc3Rlci4uXCIvPlxuICAgICAgICA8cD5JJ20gV29ya2luZyDwn5GMPC9wPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIFBvc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgc2hvd0lkOiBudW1iZXI7XG4gICAgcG9zdGVyVXJsJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0dm1hemU6IFR2bWF6ZVNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3N0ZXJVcmwkID0gdGhpcy50dm1hemVcbiAgICAgICAgICAgIC5nZXRTaG93KHRoaXMuc2hvd0lkKVxuICAgICAgICAgICAgLnBpcGUobWFwKHNob3cgPT4gc2hvdy5pbWFnZS5tZWRpdW0pKVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5wb3N0ZXJVcmwkLnN1YnNjcmliZShyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XG4gICAgfVxufSJdfQ==