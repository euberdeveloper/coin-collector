# Coin Collector
A desktop app made with Electron for an Italian coin collector.

## Project destination
This is the source code of a desktop app made with electron. It was tested only for Windows, but it should work also for Linux and Mac.

## Project purpose
This app was needed by an Italian coin collector to have a beautyful and organized digital list of all his coins. There is a section with a form where coins can be added, a section where they can be visualized by ambit, be edited or be deleted. There is then a section where it is possible to make and execute backups, stored as zip files.

## Project usefulness
This app was thought and developed for a specific problem and for a specific person. Although this, it could be useful as a very simple
development example of a desktop app with electron and angular. Furthermore, with some adjustments and programming notions, it could be 
used by other coin collectors to make an app which fits their own collection.

## How it was made
This app was make with `Electron`. `Typescript` was used as main script language, both for main and render processes. There is a loading splash window made with only html and css. The main app is made with `Angular`, with the support of `Angular Material` and `Angular Flexbox` for the layout and `DexieDB` (lib for `IndexedDb`) for the database. Other node modules were used to make the part wich works on the system.

## How to run it
If you want to run the project on windows:
* install `nodejs`
* download and unzip this repository
* open the `coin-collector` folder with the command line
* type `npm i`
* type `npm run electron-windows`
* in the root folder, go to `dist/deployed/windows` and run `CoinCollectorInstaller.exe` 
* it should install the app and create a link on the desktop

## Commands
These are the npm commands:
* `npm run electron-splashscreen`: it moves all the html/css/js files from the electron folder to the dist folder
* `npm run electron-compile`: it compiles the ts files in the electron folder and runs the electron-splashscreen command
* `npm run electron-build`: it builds the angular site
* `npm run electron-build-prod`: it builds the angular site optimized for production
* `npm run electron-serve`: it serves the electron desktop app
* `npm run electron`: it compiles the electron files, builds the angular project and serves the desktop app
* `npm run electron-prod`: it compiles the electron files, builds the angular project for production and serves the desktop app
* `npm run electron-icons`: it generates from an initial png the icons of the desktop apps in the resources folder
* `npm run electron-package`: it packages the electron project in the apps for all the desktop os
* `npm run electron-package-windows`: it packages the electron project in the apps for windows os
* `npm run electron-package-linux`:  it packages the electron project in the apps for all linux os
* `npm run electron-package-mac`: it packages the electron project in the apps for mac
* `npm run electron-winstaller-compile`: it compiles the ts files in the installer/windows folder
* `npm run electron-deploy-windows`:  it runs the electron-winstaller-compile command and generates the installer for windows
* `npm run electron-deploy-linux`: it generates the installer for linux (debian)
* `npm run electron-deploy-mac`: it generates the installer for mac
* `npm run electron-windows`:  it compiles, packages the project and generates the installer for windows
* `npm run electron-linux`: it compiles, packages the project and generates the installer for linux (debian)
* `npm run electron-mac`: it compiles, packages the project and generates the installer for mac

## Project structure

<pre>
---- README.md
---- LICENSE
---> <b>coin-collector</b>
-------- package.json
-------- package-lock.json
-------- tsconfig.json
-------- tslint.json
-------- angular.json
-------> <b>electron</b>
-------------- tsconfig.json
-------------- main.ts
-------------- main-window.ts
-------------- splash-window.ts
-------------- auto-update.ts
-------------- squirrel-event.ts
-------------- zip-manager.ts
-------------> <b>splashscreen</b>
------------------------ index.html
------------------------ splashscreen.css
-------> <b>installer</b>
-------------> <b>linux</b>
------------------------ debian_installer.json
-------------> <b>windows</b>
------------------------ tsconfig.json
------------------------ build.ts
-------> <b>resources</b>
-------------> <b>loading-gif</b>
------------------------ installer.gif
-------------> <b>setup</b>
------------------------ setup.ico
-------------> <b>src</b>
------------------------ icon.ico
-------------> <b>icons</b> <i>[built]</i>
-----------------------> <b>src</b> <i>[angular source]</i>
-------> <b>dist</b> <i>[built]</i>
-------------> <b>angular</b>
-------------> <b>electron<b/>
-------------> <b>installer<b/>
---> <b>dist</b> <i>[prod-built]</i>
-------> <b>packaged</b>
-------> <b>deployed</b>
</pre>

