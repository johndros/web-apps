import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import {
  MainComponent,
  NavComponent,
  ContentComponent,
  FooterComponent
} from './index';
import { SharedModule } from './shared/shared.module';
import { CardsModule } from './cards/cards.module';
import { CardListComponent } from './cards';

@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    FooterComponent,
    ContentComponent,
    // CardListComponent
  ],
  imports: [
    MainRoutingModule,
    CardsModule,
    SharedModule
  ]
})
export class MainModule { }
