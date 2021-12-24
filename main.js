const { app, BrowserWindow } = require('electron');
const path = require('path');

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
            nodeIntegration: true
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