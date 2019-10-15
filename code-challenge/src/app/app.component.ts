import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { map, startWith } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    searchField: FormControl = new FormControl();

    results = [];
    searchEntries: Observable<boolean>;

    showDropDown = false;

    constructor(private srv: ApiService) { }

    ngOnInit() {
        this.searchData()
    }

    searchData() {
        this.searchField.valueChanges
            .subscribe(searchField => this.srv.search(searchField)
                .subscribe(resp => this.results = resp.entries)
            );
    }

    toggleDropDown() {
        this.showDropDown = !this.showDropDown;
    }
}
