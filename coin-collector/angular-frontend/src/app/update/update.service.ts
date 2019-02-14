import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Subject, Observable } from 'rxjs';

interface DownloadedData {
  event: Electron.Event;
  releaseNotes: string; 
  releaseName: string;
}

export interface UpdateState {
  status: 'DOWNLOADING' | 'DOWNLOADED' | 'ERROR';
  error?: Error;
  downloadedData?: DownloadedData;
  callback?: (response: boolean) => void;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private ipcRenderer: Electron.IpcRenderer;
  private updateSubject = new Subject<UpdateState>();

  constructor(electron: ElectronService) {
    this.ipcRenderer = electron.ipcRenderer;
    this.init();
  }

  private init(): void {

    this.ipcRenderer.on('update-downloading', _event => {
      this.updateSubject.next({ status: 'DOWNLOADING' });
      this.ipcRenderer.send('update-start-connection');
    });

    this.ipcRenderer.on('update-error', (_event, error: Error) => {
      this.updateSubject.next({ 
        status: 'ERROR',
        error: error
      });
      this.ipcRenderer.send('update-start-connection');
    });

    this.ipcRenderer.on('update-downloaded', (_event, data: DownloadedData) => {
      this.updateSubject.next({ 
        status: 'DOWNLOADED',
        downloadedData: data,
        callback: (response: boolean) => {
          this.ipcRenderer.send('update-response', response);
        }
      });
      this.ipcRenderer.send('update-start-connection');
    });

    this.ipcRenderer.send('update-ready');
    this.ipcRenderer.on('update-can-start', _event => {
      setTimeout(() => this.ipcRenderer.send('update-start-connection'), 2 * 1000);
    });

  }

  getUpdateObservable(): Observable<UpdateState> {
    return this.updateSubject.asObservable();
  }

}
