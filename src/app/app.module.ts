import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { CardDisplayerComponent } from './card-displayer/card-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryCardComponent,
    ItemCardComponent,
    CardDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
