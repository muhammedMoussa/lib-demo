import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Injectable, Component, Input, defineInjectable, inject, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getShow(id) {
        /** @type {?} */
        const url = `${this.apiRoot}/shows/${id}`;
        return this.http.get(url);
    }
}
TvmazeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TvmazeService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ TvmazeService.ngInjectableDef = defineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(inject(HttpClient)); }, token: TvmazeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TvmazeComponent.decorators = [
    { type: Component, args: [{
                selector: 'tm-tvmaze',
                template: `
    <p>
      tvmaze works!
    </p>
  `
            }] }
];
/** @nocollapse */
TvmazeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PosterComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeModule {
}
TvmazeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TvmazeComponent, PosterComponent],
                imports: [
                    CommonModule,
                    HttpClientModule
                ],
                exports: [TvmazeComponent, PosterComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TvmazeService, TvmazeComponent, TvmazeModule, PosterComponent as ɵa };

//# sourceMappingURL=tvmaze.js.map