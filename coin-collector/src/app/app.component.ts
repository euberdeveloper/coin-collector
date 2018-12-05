import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { InterfaceService, menu } from './interface/interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  uiState = menu;

  private uiSubscription: Subscription;

  constructor(private ui: InterfaceService) { }

  ngOnInit() {
    this.ui.setState(this.uiState);
    this.uiSubscription = this.ui.state.subscribe(
      uiState => setTimeout(() => { 
        this.uiState = uiState; 
        if(this.uiState.menu) {
          this.uiState.menu = { ...uiState.menu };
        }
      }, 1)
    );
  }

  ngOnDestroy(): void {
    if(this.uiSubscription && !this.uiSubscription.closed) {
      this.uiSubscription.unsubscribe();
    }
  }

}
