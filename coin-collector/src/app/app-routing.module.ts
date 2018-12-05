import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametriComponent } from 'src/app/parametri/parametri.component';
import { UnitsComponent } from 'src/app/units/units.component';

const routes: Routes = [
  { path: 'parametri/:param', component: ParametriComponent },
  { path: 'units/:unit', component: UnitsComponent },
  { path: '', redirectTo: '/parametri/conservazioni', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
