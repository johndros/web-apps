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

@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    CardsModule
  ]
})
export class MainModule { }
