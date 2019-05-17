/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TvmazeService {
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
/** @nocollapse */ TvmazeService.ngInjectableDef = i0.defineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(i0.inject(i1.HttpClient)); }, token: TvmazeService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TvmazeService.prototype.apiRoot;
    /**
     * @type {?}
     * @private
     */
    TvmazeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZtYXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90dm1hemUvIiwic291cmNlcyI6WyJsaWIvdHZtYXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLbEQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFHeEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZuQixZQUFPLEdBQUcsd0JBQXdCLENBQUM7SUFFWixDQUFDOzs7OztJQUV6QyxPQUFPLENBQUMsRUFBVTs7Y0FDVixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEVBQUUsRUFBRTtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQVhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFVBQVU7Ozs7Ozs7O0lBTWpCLGdDQUFvRDs7Ozs7SUFFeEMsNkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR2bWF6ZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGFwaVJvb3QgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRTaG93KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpUm9vdH0vc2hvd3MvJHtpZH1gXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpO1xuICB9XG59XG4iXX0=