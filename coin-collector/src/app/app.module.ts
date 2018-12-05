import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AddSchedaComponent } from 'src/app/gestione/scheda/add-scheda/add-scheda.component';
import { EditSchedaComponent } from 'src/app/gestione/scheda/edit-scheda/edit-scheda.component';
import { FormSchedaComponent } from 'src/app/gestione/scheda/form-scheda/form-scheda.component';
import { QuantityInputComponent } from 'src/app/gestione/scheda/form-scheda/quantity-input/quantity-input.component';
import { ResourceInputComponent } from 'src/app/gestione/scheda/form-scheda/resource-input/resource-input.component';
import { YearInputComponent } from 'src/app/gestione/scheda/form-scheda/year-input/year-input.component';
import { BackupComponent } from 'src/app/gestione/backup/backup.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ParametriComponent,
    UnitsComponent,
    ResourcesComponent,
    AddSchedaComponent,
    EditSchedaComponent,
    FormSchedaComponent,
    QuantityInputComponent,
    ResourceInputComponent,
    YearInputComponent,
    BackupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
