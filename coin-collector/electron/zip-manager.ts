import { ipcMain } from 'electron';
import * as zip from 'zip-a-folder';
import * as unzip from 'extract-zip'

export function manageZip(): void {

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

}