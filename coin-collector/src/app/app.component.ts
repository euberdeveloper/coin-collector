import { Component, OnInit, OnDestroy, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';

import { InterfaceService, menu } from 'src/app/interface/interface.service';
import { SystemService } from 'src/app/system/system.service';
import { UpdateService } from 'src/app/update/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  uiState = menu;
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  private uiSubscription: Subscription;
  private updateSubscription: Subscription;

  constructor(
    private zone: NgZone,
    private snackBar: MatSnackBar,
    private key: HotkeysService, 
    private router: Router,
    private ui: InterfaceService,
    private system: SystemService,
    private update: UpdateService
  ) { }

  ngOnInit() {
    this.ui.setState(this.uiState);
    this.uiSubscription = this.ui.state.subscribe(
      uiState => setTimeout(() => {
        this.zone.run(() => {
          this.uiState = { ...uiState }; 
          if(this.uiState.menu) {
            this.uiState.menu = { ...uiState.menu };
          }
        });
      }, 1)
    );
    this.updateSubscription = this.update.getUpdateObservable().subscribe(
      updateState => {
        console.log('updateStateChanged: ', updateState)
        switch(updateState.status) {
          case 'DOWNLOADING':
            this.snackBar.open('Aggiornamento trovato, scaricando...', 'Ok',  { 
              duration: 4000,
              panelClass: ['success_snack'] 
            });
            this.ui.setIsUpdating(true);
            break;
          case 'DOWNLOADED':
            const snack = this.snackBar.open('Aggiornamento scaricato. Riavviare l\'app?', 'Riavvia ora', { 
              duration: 4000,
              panelClass: ['warn_snack'] 
            });
            snack.onAction().subscribe(
              () => {
                updateState.callback(true);
              }
            );
            this.ui.setIsUpdating(false);
            break;
          case 'ERROR':
            this.ui.setIsUpdating(false);
            this.snackBar.open('Impossibile aggiornare l\'app', 'Ok',  { 
              duration: 4000,
              panelClass: ['error_snack'] 
            });
            console.error('error in updating', updateState.error)
            break;
        }
      }
    );
    this.setKeyEvents();
  }

  ngOnDestroy(): void {
    if(this.uiSubscription && !this.uiSubscription.closed) {
      this.uiSubscription.unsubscribe();
    }
    if(this.updateSubscription && !this.updateSubscription.closed) {
      this.updateSubscription.unsubscribe();
    }
  }

  private setKeyEvents(): void {

    this.key.add(new Hotkey('ctrl+m', (_event: KeyboardEvent): boolean => {
      this.sidenav.toggle();
      return false;
    }));

    this.key.add(new Hotkey('ctrl+l', (_event: KeyboardEvent): boolean => {
      this.router.navigate(['collezione']);
      return false;
    }));

    this.key.add(new Hotkey('ctrl+p', (_event: KeyboardEvent): boolean => {
      this.router.navigate(['parametri/conservazioni']);
      return false;
    }));

    this.key.add(new Hotkey('ctrl+u', (_event: KeyboardEvent): boolean => {
      this.router.navigate(['units/pesi']);
      return false;
    }));

    this.key.add(new Hotkey('ctrl+i', (_event: KeyboardEvent): boolean => {
      this.router.navigate(['resources/images']);
      return false;
    }));

    this.key.add(new Hotkey('ctrl+f', (_event: KeyboardEvent): boolean => {
      this.router.navigate(['resources/invoices']);
      return false;
    }));

    this.key.add(new Hotkey('ctrl+n', (_event: KeyboardEvent): boolean => {
      this.router.navigate(['gestione/add-scheda']);
      return false;
    }));

    this.key.add(new Hotkey('ctrl+b', (_event: KeyboardEvent): boolean => {
      this.router.navigate(['gestione/backup']);
      return false;
    }));

    this.key.add(new Hotkey('ctrl+d', (_event: KeyboardEvent): boolean => {
      this.system.toggleDevTools();
      return false;
    }));

  }

}
