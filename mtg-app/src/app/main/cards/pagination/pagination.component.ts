import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../global/services/header.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    header: string;

    constructor(private headerService: HeaderService) { }

    ngOnInit() {
        this.getHeader();
    }

    getHeader = () => {
        let parse = require('parse-link-header');

        let linkHeader = this.headerService.getHeaders().subscribe(
            resp => {
                resp.headers.get('Link')
            });

        let parsed = parse(linkHeader);
        console.log(parsed)
    }

}
