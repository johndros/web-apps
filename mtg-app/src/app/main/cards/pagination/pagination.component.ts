import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../global/services/header.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    Header = '';

    constructor(private headerService: HeaderService) { }

    ngOnInit() {
        this.getHeader();
        //this.linkHeader();
    }

    getHeader = () => {
        this.headerService.getHeaders().subscribe(
            resp => {
                resp.headers.keys();
                console.log(resp)

            })
    }

    /*linkHeader = () => {
        let parts = this.lInksHeader.split(',').reduce((acc, link) => {
            let match = link.match(/<(.*)>; rel="(\w*)"/)
            let url = match[1]
            let rel = match[2]
            acc[rel] = url
            return acc;
        }, {})
        console.log(parts)
    }*/
    
}
