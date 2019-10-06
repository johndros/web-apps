import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
    cardsUrl = 'https://api.magicthegathering.io/v1/cards';

    constructor(private http: HttpClient) { }

    getHeaders = (): Observable<HttpResponse<any>> => {
        return this.http.get<any>(this.cardsUrl, { observe: 'response' })
            .pipe(catchError(this.handleError))
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
