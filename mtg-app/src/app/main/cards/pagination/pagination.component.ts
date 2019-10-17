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
        this.linkHeader();
    }

    getHeader = () => {
        this.headerService.getHeaders().subscribe(
            resp => {
                this.header = resp.headers.get('Link')
                console.log(this.header)
            })
    }

    linkHeader = () => {
        let parts = this.header.split(',').reduce((acc, link) => {
            let match = link.match(/<(.*)>; rel="(\w*)"/)
            let url = match[1]
            let rel = match[2]
            acc[rel] = url
            return acc;
        }, {})
        console.log(parts)
    }
    
}
