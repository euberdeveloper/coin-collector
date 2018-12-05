import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ChildProcessService } from 'ngx-childprocess';
import { ChildProcess } from 'ngx-childprocess/src/childProcess.interface';
import { FsService } from 'ngx-fs';
import { Subject, Observable } from 'rxjs';

import { SnackType, SnackMessage } from './snack.interface';
export { SnackType, SnackMessage } from './snack.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private app: Electron.App;
  private shell: Electron.Shell;
  private dialog: Electron.Dialog;
  private childProcess: ChildProcess;
  private fs: any;

  private userDataPath: string;
  private messageSubject = new Subject<SnackMessage>();

  constructor(
    private electron: ElectronService,  
    childProcess: ChildProcessService,
    fs: FsService, 
  ) {
    this.app = this.electron.remote.app;
    this.shell = this.electron.remote.shell;
    this.dialog = this.electron.remote.dialog;
    this.childProcess = childProcess.childProcess;
    this.fs = fs.fs;
    this.userDataPath = this.app.getPath('userData');
  }

  getMessageObservable(): Observable<SnackMessage> {
    return this.messageSubject.asObservable();
  }

  private cwd(path: string): string {
    return this.userDataPath + '\\' + path;
  }

  private makeFolderIfNotExists(folder: string): void {
    try {
      const exists = this.fs.existsSync(this.cwd(folder));
      if(!exists) {
        try {
          this.fs.mkdirSync(this.cwd(folder));
        } 
        catch(error) {
          const snackMessage: SnackMessage = {
            type: SnackType.ERROR,
            message: 'Errore: impossibile creare la cartella ' + folder,
            log: 'error in making ' + folder + 'dir, ',
            object: error
          }
          this.messageSubject.next(snackMessage);
        }
      }
    }
    catch(error) {
      const snackMessage: SnackMessage = {
        type: SnackType.ERROR,
        message: 'Errore: impossibile controllare esistenza cartella ' + this.userDataPath,
        log: 'error in checking existance of ' + this.userDataPath,
        object: error
      }
      this.messageSubject.next(snackMessage);
    }
  }

  openFile(path: string): Promise<void> {

    function getCommand(): string {
      switch (process.platform) { 
         case 'darwin': 
          return 'open';
         case 'win32': 
          return 'start "Dummy title"';
         case 'linux': 
          return 'xdg-open';
         default:
          console.warn("Unknown process platform " + process.platform);
          return null;
      }
   }

    return new Promise<void>(
      (resolve, reject) => {
        const openCommand = getCommand();
        if(openCommand) {
          this.childProcess.exec(openCommand + ' "' + path + '"', null, (error, _stdout, _stderr) => {
            if(error) {
              reject(error);
            }
          })
          .on('close', code => {
            resolve();
          });
        }
        else {
          reject('error: unknown process platform');
        }
      }
    );
  }

  private getTitle(resource: string): string {
    switch(resource) {
      case 'images':
        return 'immagini';
      case 'invoices':
        return 'fatture';
      default:
        return '';
    }
  }

  private getExtensionFilters(resource: string): Electron.FileFilter[] {
    switch(resource) {
      case 'images':
        return [{ name: 'Immagini', extensions: ['jpg', 'png'] }];
      case 'invoices':
        return [{ name: 'Documenti', extensions: ['jpg', 'png', 'pdf'] }];
      default:
        return [];
    }
  }

  private checkPath(resource: string, path: string): boolean {
    const expected = this.cwd(resource + '\\' + this.getFileName(path));
    return (path == expected);
  }

  getFileName(path: string): string {
    const parts = path.split('\\');
    return parts[parts.length - 1];
  }

  openResourceFolder(resource: string): void {
    this.makeFolderIfNotExists(resource);
    this.shell.openExternal(this.cwd(resource));
  }

  addResource(resource: string): void {
    this.dialog.showOpenDialog({
      title: 'Aggiungi ' + this.getTitle(resource),
      properties: ['openFile', 'multiSelections'],
      filters: this.getExtensionFilters(resource),
      buttonLabel: 'Aggiungi'
    }, (files) => {
      if(files && files.length) {
        this.makeFolderIfNotExists(resource);
        for(let file of files) {
          const fileName = this.getFileName(file);
          const target = this.cwd(resource + '\\' + fileName);
          this.fs.copyFile(file, target, (error) => {
            if(error) {
              const snackMessage: SnackMessage = {
                type: SnackType.ERROR,
                message: 'Errore:  impossibile copiare file',
                log: 'error in copying file ' + file,
                object: error
              }
              this.messageSubject.next(snackMessage);
            }
            else {
              const snackMessage: SnackMessage = {
                type: SnackType.SUCCESS,
                message: 'File copiato con successo',
                log: 'successfully copied file to ' + target
              }
              this.messageSubject.next(snackMessage);
            }
          });
        }
      }
    });
  }

  getResources(resource: string): string[] {
    try {
      this.makeFolderIfNotExists(resource);
      const files: string[] = this.fs.readdirSync(this.cwd(resource));
      return files.map(file => this.cwd(resource + '\\' + file));
    }
    catch(error) {
      console.error('error in reading dir ' + this.userDataPath, error);
      return [];
    }
  }

  openResourceDialog(resource: string): Promise<string> {
    return new Promise<string>(
      (resolve, reject) => {
        this.dialog.showOpenDialog({
          title: 'Seleziona ' + this.getTitle(resource),
          defaultPath: this.cwd(resource),
          properties: ['openFile'],
          filters: this.getExtensionFilters(resource),
          buttonLabel: 'Seleziona'
        }, (files) => {
          if(files && files.length) {
            const file = files[0];
            if(this.checkPath(resource, file))  {
              resolve(file);
            }
            else {
              reject('error: you must select only files in the resources directory');
            }
          }
        });
      }
    );
  }
  
}
