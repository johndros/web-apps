import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './api.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('list') userInput: ElementRef;
    searchField: FormGroup;

    results = [];
    searchEntries: Observable<boolean>;

    showDropDown = false;

    constructor(private srv: ApiService, private fb: FormBuilder) {
        this.form();
    }

    ngOnInit() {
        this.searchData();
    }

    form() {
        this.searchField = this.fb.group({
            search: []
        })
    }



    searchData() {
        this.searchField.get('search').valueChanges
            .pipe(debounceTime(30), distinctUntilChanged())
            .subscribe(searchField => this.srv.search(searchField)
                .subscribe(resp => this.results = resp.entries)
        );
    }
    selectValue(value) {
        this.searchField.patchValue({ 'search': value });
        this.showDropDown = false;
    }
    search() {
        const url = 'https://www.google.com/search?'
        window.open(url + `q=${this.searchField.value.search}`)
    }



    keyPress() {
        let event = new KeyboardEvent('keypress', { 'bubbles': true });
        this.userInput.nativeElement.dispatchEvent(event);
    }
    onKeyPress() {
        this.showDropDown = true;
    }



    closeDropDown() {
        this.showDropDown = !this.showDropDown;
    }
    toggleDropDown() {
        this.showDropDown = !this.showDropDown
    }
}
