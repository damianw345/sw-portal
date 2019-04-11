import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CardDisplayerComponent } from './card-displayer/card-displayer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryCardComponent,
    CardDisplayerComponent,
    DashboardComponent,
    ResourceCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
