import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametriComponent } from 'src/app/parametri/parametri.component';
import { UnitsComponent } from 'src/app/units/units.component';
import { ResourcesComponent } from 'src/app/resources/resources.component';

const routes: Routes = [
  { path: 'parametri/:param', component: ParametriComponent },
  { path: 'units/:unit', component: UnitsComponent },
  { path: 'resources/:res', component: ResourcesComponent },
  { path: '', redirectTo: '/parametri/conservazioni', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
