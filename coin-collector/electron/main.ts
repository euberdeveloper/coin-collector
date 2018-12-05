import { app } from 'electron';

import { MainWindow } from './main-window';

let main: MainWindow;

function start(debug: boolean) {
  main = new MainWindow(debug);
  main.show();
}

app.on("ready", () => start(false) );

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (main.getWindow() === null) {
    main = new MainWindow();
  }
});
