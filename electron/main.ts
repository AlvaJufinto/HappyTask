// In the main process.
const { app, BrowserWindow, } = require('electron');
const path = require('path');

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        autoHideMenuBar: true,
    });

    mainWindow.loadURL('http://localhost:3000/')

});

app.on('window-all-closed', () => {
    app.quit()
  })