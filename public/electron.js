const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        autoHideMenuBar: true,
        titleBarOverlay: {
            color: '#FFF',
                symbolColor: '#000',
                height: 60
        },
        icon: path.join(__dirname, '/icon-2.png'),
        
        
    });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
//   mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});