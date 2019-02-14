import { app } from 'electron';
import { handleSquirrelEvent } from './squirrel-event';
import { autoUpdate, updateCanStart } from './auto-update';
import { manageZip } from './zip-manager';

// if is squirrel startup, quit the app
if(require('electron-squirrel-startup')) app.quit();
// this should be placed at top of main.js to handle setup events quickly
const stop = handleSquirrelEvent(app);
//To see if it is development mode
const isDev = require('electron-is-dev');

import { MainWindow } from './main-window';
import { SplashWindow } from './splash-window';

if(!stop) {

  let main: MainWindow;
  let splash: SplashWindow;
    
  const start = (time: number, debug: boolean) => {
    main = new MainWindow(debug);
    splash = new SplashWindow();
    let splashTimeout = setTimeout(() => {
      splash.hide();
      main.show();
      splash.close();
      updateCanStart();
    }, time);
    splash.onCloseinterval(splashTimeout, main);
  }
  
  app.on("ready", () => start(8000, false));
  
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  
  app.on("activate", () => {
    if (main.getWindow() === null) {
      main = new MainWindow();
    }
  });
  
  if(!isDev) {
    autoUpdate(app);
  }
  manageZip();

}
