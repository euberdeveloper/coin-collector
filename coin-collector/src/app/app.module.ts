import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxElectronModule } from 'ngx-electron';
import { NgxFsModule } from 'ngx-fs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MaterialModule } from 'src/app/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from 'src/app/app.component';
import { SideMenuComponent } from 'src/app/side-menu/side-menu.component';
import { ParametriComponent } from 'src/app/parametri/parametri.component';
import { UnitsComponent } from 'src/app/units/units.component';
import { ResourcesComponent } from 'src/app/resources/resources.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ParametriComponent,
    UnitsComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxElectronModule,
    NgxFsModule,
    PerfectScrollbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
