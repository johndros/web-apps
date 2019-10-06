import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../global/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  totalCardHeader = '';
  rateLimitHeader = '';
  rateRemainHeader = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
   // this.getHeader()
  }

  /*getHeader = () => {
    this.apiService.getHeaders().subscribe(
      resp => {
        this.totalCardHeader = resp.headers.get('Total-Count')
        this.rateLimitHeader = resp.headers.get('Ratelimit-Limit')
        this.rateRemainHeader = resp.headers.get('Ratelimit-Remaining')
      },
      error => console.log(error)
    )
  }*/
}
