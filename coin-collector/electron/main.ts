import { app, ipcMain } from 'electron';

import * as zip from 'zip-a-folder';
import * as unzip from 'extract-zip'

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

ipcMain.on('zip', (event, args) => {
  const { from, to } = args;
  zip.zipFolder(from, to, (error) => {
    event.sender.send('zip-response', error);
  });
});

ipcMain.on('unzip', (event, args) => {
  const { from, to } = args;
  unzip(from, { dir: to }, function (error) {
    event.sender.send('unzip-response', error);
   });
});