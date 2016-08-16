import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component'
import { DashboardComponent } from './dashboard.component'

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
  path: 'detail/:id',
  component: HeroDetailComponent
  },
  {
  path: 'detail/:id',
  component: HeroDetailComponent
  }
];
export const routing = RouterModule.forRoot(appRoutes);