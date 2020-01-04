import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDisplayerComponent } from './card-displayer/card-displayer.component';
import { ResourceDetailCardComponent } from './resource-detail-card/resource-detail-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'characters',
    component: CardDisplayerComponent
  },
  {
    path: 'characters/:id',
    component: ResourceDetailCardComponent
  },
  {
    path: 'films',
    component: CardDisplayerComponent
  },
  {
    path: 'films/:id',
    component: ResourceDetailCardComponent
  },
  {
    path: 'planets',
    component: CardDisplayerComponent
  },
  {
    path: 'planets/:id',
    component: ResourceDetailCardComponent
  },
  {
    path: 'species',
    component: CardDisplayerComponent
  },
  {
    path: 'species/:id',
    component: ResourceDetailCardComponent
  },
  {
    path: 'starships',
    component: CardDisplayerComponent
  },
  {
    path: 'starships/:id',
    component: ResourceDetailCardComponent
  },
  {
    path: 'vehicles',
    component: CardDisplayerComponent
  },
  {
    path: 'vehicles/:id',
    component: ResourceDetailCardComponent
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
