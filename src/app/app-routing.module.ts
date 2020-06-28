import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDisplayerComponent } from './components/card-displayer/card-displayer.component';
import { ResourceDetailCardComponent } from './components/resource-detail-card/resource-detail-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { OAuthCallbackComponent } from './components/oauth-callback/o-auth-callback.component';
import { OAuth2CallbackResolver } from './core/resolver/oauth2-callback-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'oauth2/callback',
    component: OAuthCallbackComponent,
    resolve: {
      oauth2Resolver: OAuth2CallbackResolver
    }
  },
  {
    path: 'characters',
    component: CardDisplayerComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'characters/:id',
    component: ResourceDetailCardComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'films',
    component: CardDisplayerComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'films/:id',
    component: ResourceDetailCardComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'planets',
    component: CardDisplayerComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'planets/:id',
    component: ResourceDetailCardComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'species',
    component: CardDisplayerComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'species/:id',
    component: ResourceDetailCardComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'starships',
    component: CardDisplayerComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'starships/:id',
    component: ResourceDetailCardComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'vehicles',
    component: CardDisplayerComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'vehicles/:id',
    component: ResourceDetailCardComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: '**',
    redirectTo: '' // TODO replace with error component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {enableTracing: true}*/ // <-- TODO remove as it's for debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
