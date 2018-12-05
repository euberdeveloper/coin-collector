import { app } from 'electron';

import { MainWindow } from './main-window';
import { SplashWindow } from './splash-window';

let main: MainWindow;
let splash: SplashWindow;

function start(time: number, debug: boolean) {
  main = new MainWindow(debug);
  splash = new SplashWindow();
  setTimeout(() => {
    splash.close();
    main.show();
  }, time);
}

app.on("ready", () => start(8000, true) );

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