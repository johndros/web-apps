import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../global/services/api.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCards();

  }

  getCards() {
    this.apiService.getCards().subscribe(
      cards => {
        this.cards = cards.cards;
      }, error => console.log(error)
    )
  }

}
