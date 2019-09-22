import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'
import { iCard } from '../models/icard';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cardsUrl = 'https://api.magicthegathering.io/v1/cards';

  constructor(private http: HttpClient) { }

  getCards = (): Observable<HttpResponse<any>> => {
    return this.http.get<HttpResponse<any>>(this.cardsUrl, { observe: 'response' })
      .pipe(catchError(this.handleError),
        tap(resp => console.log(resp.headers)))
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
