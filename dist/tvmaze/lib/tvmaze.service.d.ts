import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class TvmazeService {
    private http;
    private readonly apiRoot;
    constructor(http: HttpClient);
    getShow(id: number): Observable<any>;
}
