const { app, BrowserWindow } = require('electron');
const path = require('path');
const noble = require('noble-winrt');

const WIN_CONSTANTS = {
    WIDTH: 1366,
    HEIGHT: 728
}

let APP_WINDOW;

function _INIT_WINDOW() {
    APP_WINDOW = new BrowserWindow({
        width: WIN_CONSTANTS.WIDTH,
        height: WIN_CONSTANTS.HEIGHT,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './load-speaker.js')
        },
        autoHideMenuBar: true
    });
    APP_WINDOW.loadFile(path.join(__dirname, './dist/index.html'));
}

app.whenReady().then(() => {
    _INIT_WINDOW();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            _INIT_WINDOW();         
        }
    });
});

app.on('window-all-closed', () => {
    if(!process.platform !== "darwin") {
        app.quit();
    }
});

function _INIT_SCAN_FOR_SPEAKER() {
    noble.on('stateChange', (state) => {
        if(state === 'poweredOn') {
            noble.startScanning(["757ed3e4-1828-4a0c-8362-c229c3a6da72"]);
        }
    });

    noble.on('discover', (peripheral) => {
        console.log(peripheral.id);
    });
}
_INIT_SCAN_FOR_SPEAKER();