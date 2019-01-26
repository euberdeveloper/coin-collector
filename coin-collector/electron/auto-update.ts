import { App, autoUpdater, ipcMain } from 'electron';

let firstCall = true;
let firstEvent: any;
let currentEvent: any;

export function updateCanStart(): void {
    firstEvent.sender.send('update-can-start');
}

export function autoUpdate(app: App, minutes?: number): void {
    ipcMain.on('update-ready', (event, _args) => {
        firstEvent = event;
    });
    ipcMain.on('update-start-connection', (event, _args) => {
        currentEvent = event;
        if(firstCall) {
            firstCall = false;
            const server = 'https://update.electronjs.org';
            const feed = `${server}/euberdeveloper/coin-collector/${process.platform}-${process.arch}/${app.getVersion()}`;
            autoUpdater.setFeedURL({ url: feed });
            console.log("update feed url: ", feed);
    
            autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
                console.log('update-downloaded', { event: event, releaseNotes, releaseName });
                currentEvent.sender.send('update-downloaded', { event: event, releaseNotes, releaseName });
            }); 
    
            autoUpdater.on('checking-for-update', () => {
                console.log('checking-for-updates');
            });
    
            autoUpdater.on('update-available', () => {
                console.log('update-available');
                currentEvent.sender.send('update-downloading');
            });
    
            autoUpdater.on('update-not-available', () => {
                console.log('update-not-available');
            });
    
            autoUpdater.on('error', error => {
                currentEvent.sender.send('update-error', error);
                console.log('error-in-updating', error.name + '\n' + error.message);
            });
    
            ipcMain.on('update-response', (response: boolean) => {
                if(response) {
                    autoUpdater.quitAndInstall();
                }
            });
    
            autoUpdater.checkForUpdates();
            if(minutes) {
                const time = minutes * 60 * 1000;
                setInterval(autoUpdater.checkForUpdates, time);
            }
        }

    });
}