const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 400,
        icon: __dirname + '/img/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);

    win.loadFile('index.html');

    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });

    console.log('window create');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
        console.log('window close');
    }
});
