import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import {
  MainComponent,
  NavComponent,
  ContentComponent,
  FooterComponent,
  CardListComponent,
  CardDetailComponent,
  PaginationComponent
} from './index';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    FooterComponent,
    ContentComponent,
    CardListComponent,
    CardDetailComponent,
    PaginationComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
