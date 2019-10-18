import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
    cardsUrl = 'https://api.magicthegathering.io/v1/cards';

    constructor(private http: HttpClient) { }

    getHeaders = (): Observable<HttpResponse<any>> => {
        return this.http.get<any>(this.cardsUrl, { observe: 'response' })
    }
}
