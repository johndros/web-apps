import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { iResults } from './model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl = 'http://35.180.182.8/Search?';

    constructor(private http: HttpClient) { }

    search(k) {
        let url = this.baseUrl + `keywords=${k}` + `&language=${navigator.languages[1]}`;
        return this.http.get<iResults>(url)
            .pipe(catchError(this.handleError));
    }

    private handleError(err) {
        let errorMessage: string;

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
