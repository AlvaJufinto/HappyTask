// In the main process.
const { app, BrowserWindow, Tray  } = require('electron');
const path = require('path');

app.on('ready', () => {
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
    // mainWindow.loadFile(path.join(__dirname, '../public/index.html'));
    mainWindow.loadURL('http://localhost:3000/')

});

app.on('window-all-closed', () => {
    app.quit()
  })