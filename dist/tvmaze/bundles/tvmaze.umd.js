(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/common'), require('@angular/core'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('tvmaze', ['exports', '@angular/common/http', '@angular/common', '@angular/core', 'rxjs/operators'], factory) :
    (factory((global.tvmaze = {}),global.ng.common.http,global.ng.common,global.ng.core,global.rxjs.operators));
}(this, (function (exports,i1,common,i0,operators) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TvmazeService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ TvmazeService.ngInjectableDef = i0.defineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(i0.inject(i1.HttpClient)); }, token: TvmazeService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
                    .pipe(operators.map(( /**
             * @param {?} show
             * @return {?}
             */function (show) { return show.image.medium; })));
            };
        /**
         * @return {?}
         */
        PosterComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.posterUrl$.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return console.log(res); }));
            };
        PosterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tm-poster',
                        template: "\n        <img *ngIf=\"posterUrl$ | async as src\" [src]=\"src\" alt=\"poster..\"/>\n        <p>I'm Working \uD83D\uDC4C</p>\n    ",
                        styles: ["\n        :host {\n            display: inline-block;\n            overflow: hidden;\n            border-radius: 4px;\n            line-height: 0;\n        }\n    "]
                    }] }
        ];
        /** @nocollapse */
        PosterComponent.ctorParameters = function () {
            return [
                { type: TvmazeService }
            ];
        };
        PosterComponent.propDecorators = {
            showId: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
                        declarations: [TvmazeComponent, PosterComponent],
                        imports: [
                            common.CommonModule,
                            i1.HttpClientModule
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

    exports.TvmazeService = TvmazeService;
    exports.TvmazeComponent = TvmazeComponent;
    exports.TvmazeModule = TvmazeModule;
    exports.ɵa = PosterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=tvmaze.umd.js.map