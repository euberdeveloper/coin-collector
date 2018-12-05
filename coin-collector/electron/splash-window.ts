import { BrowserWindow } from "electron";
import * as path from 'path';
import * as url from 'url';

export class SplashWindow {

  private win: BrowserWindow;

  private init(): void {
    this.win = new BrowserWindow({
      width: 670,
      height: 280,
      frame: false
    });
  }

  private load(): void {
    this.win.loadURL(
      url.format({
        pathname: path.join(__dirname, `splashscreen/index.html`),
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

  close(): void {
      this.win.hide();
      this.win.close();
  }

  constructor() {
    this.init();
    this.load();
    this.onClose();
  }

}
