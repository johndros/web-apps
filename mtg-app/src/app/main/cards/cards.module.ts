import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  CardListComponent,
  CardDetailComponent
} from './index';

@NgModule({
  declarations: [
    CardListComponent,
    CardDetailComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CardsModule { }
