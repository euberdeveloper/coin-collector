import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }