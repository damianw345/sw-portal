import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDisplayerComponent } from './card-displayer/card-displayer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'characters',
    component: CardDisplayerComponent
  },
  {
    path: 'films',
    component: CardDisplayerComponent
  },
  {
    path: 'planets',
    component: CardDisplayerComponent
  },
  {
    path: 'species',
    component: CardDisplayerComponent
  },
  {
    path: 'starships',
    component: CardDisplayerComponent
  },
  {
    path: 'vehicles',
    component: CardDisplayerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
