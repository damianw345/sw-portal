import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CardDisplayerComponent } from './components/card-displayer/card-displayer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResourceCardComponent } from './components/resource-card/resource-card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ResourceDetailCardComponent } from './components/resource-detail-card/resource-detail-card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './core/http/jwt-interceptor';
import { OAuthCallbackComponent } from './components/oauth-callback/o-auth-callback.component';
import { ErrorDialogComponent } from './components/message-dialog/error-dialog.component';
import { ErrorInterceptor } from './core/http/error-interceptor';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ResourceRelatedComponent } from './components/resource-related/resource-related.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryCardComponent,
    CardDisplayerComponent,
    DashboardComponent,
    ResourceCardComponent,
    PaginatorComponent,
    ResourceDetailCardComponent,
    BreadcrumbComponent,
    LoginComponent,
    OAuthCallbackComponent,
    ErrorDialogComponent,
    ResourceRelatedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [
    ErrorDialogComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
