import { BrowserWindow } from "electron";
import * as path from 'path';
import * as url from 'url';

export class MainWindow {

    private win: BrowserWindow;
  
    private init(): void {
      this.win = new BrowserWindow({ show: false });
    }
  
    private load(): void {
      this.win.loadURL(
        url.format({
          pathname: path.join(__dirname, `../angular/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
    }
  
    private onClose(): void {
      this.win.on("closed", () => {
        this.win = null;
      });
    }
  
    private setAspect(): void {
      this.win.maximize();
      this.win.hide();
      this.win.setMenu(null);
    }
  
    private devTools(debug?: boolean): void {
      if(debug) {
        this.win.webContents.openDevTools();
      }
    }
      
    show(): void {
      this.win.show();
    }
  
    getWindow(): BrowserWindow {
      return this.win;
    }
    
    constructor(debug?: boolean) {
      this.init();
      this.load();
      this.onClose();
      this.setAspect();
      this.devTools(debug);
    }
  
  }