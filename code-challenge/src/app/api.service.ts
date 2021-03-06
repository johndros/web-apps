import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iResults } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl = 'http://35.180.182.8/Search?';

    constructor(private http: HttpClient) { }

    search(k) {
        let url = this.baseUrl + `keywords=${k}` + `&language=${navigator.languages[1]}`;
        return this.http.get<iResults>(url)
    }
}
