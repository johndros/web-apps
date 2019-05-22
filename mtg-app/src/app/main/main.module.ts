import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContentComponent } from './layouts/content/content.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, ContentComponent, CardListComponent, CardDetailComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
