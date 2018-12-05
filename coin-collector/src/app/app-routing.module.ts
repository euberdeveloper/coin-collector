import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametriComponent } from 'src/app/parametri/parametri.component';

const routes: Routes = [
  { path: 'parametri/:param', component: ParametriComponent },
  { path: '', redirectTo: '/parametri/conservazioni', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
