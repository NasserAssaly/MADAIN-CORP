import { Routes, RouterModule } from '@angular/router';

import { SystemPages } from "./app.config";

import { HomeComponent } from "./pages/home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo: SystemPages.Home.toString(), pathMatch: 'full' },
  { path: SystemPages.Home.toString(), component: HomeComponent },


  // // otherwise redirect to home
  // ,{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


