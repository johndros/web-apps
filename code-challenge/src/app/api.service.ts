import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { iResults } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl = 'http://35.180.182.8/Search?';

    constructor(private http: HttpClient) { }

    search(k) {
        let url = this.baseUrl + `keywords=${k}` + '&language=el';
        return this.http.get<iResults>(url).pipe(
            debounceTime(200)
        );
    }
}
