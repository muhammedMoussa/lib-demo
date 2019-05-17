import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Injectable, Component, Input, defineInjectable, inject, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeService = /** @class */ (function () {
    function TvmazeService(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    /**
     * @param {?} id
     * @return {?}
     */
    TvmazeService.prototype.getShow = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var url = this.apiRoot + "/shows/" + id;
        return this.http.get(url);
    };
    TvmazeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TvmazeService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ TvmazeService.ngInjectableDef = defineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(inject(HttpClient)); }, token: TvmazeService, providedIn: "root" });
    return TvmazeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeComponent = /** @class */ (function () {
    function TvmazeComponent() {
    }
    /**
     * @return {?}
     */
    TvmazeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TvmazeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tm-tvmaze',
                    template: "\n    <p>\n      tvmaze works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    TvmazeComponent.ctorParameters = function () { return []; };
    return TvmazeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeModule = /** @class */ (function () {
    function TvmazeModule() {
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
    return TvmazeModule;
}());

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