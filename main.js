const { app, ipcMain, BrowserWindow } = require('electron');
const path = require('path');
const noble = require('noble-winrt');

const WIN_CONSTANTS = {
    WIDTH: 1366,
    HEIGHT: 728
}

let APP_WINDOW;

const SPEAKER_CONTENTS = {
    PRIMARY_SERVICE_UUID: "757ed3e4-1828-4a0c-8362-c229c3a6da72",
    POWER_ON_UUID: "c6d6dc0d-07f5-47ef-9b59-630622b01fd3",
    MAC_ADDR: "88:C6:26:8C:DA:34",
    ID: "88c6268cda34",
    POWER_ON_CHARACTERISTIC: null
}

function _INIT_WINDOW() {
    APP_WINDOW = new BrowserWindow({
        width: WIN_CONSTANTS.WIDTH,
        height: WIN_CONSTANTS.HEIGHT,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './preload.js'),
            enableRemoteModule: true,
            nodeIntegrationInWorker: true
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
            noble.startScanning([SPEAKER_CONTENTS.PRIMARY_SERVICE_UUID]);
        }
    });

    noble.on('discover', (peripheral) => {
        console.log("Scanning peripherals");
        if(peripheral.id === SPEAKER_CONTENTS.ID) {
            console.log('Found speaker');

            function storePowerOnCharacteristic(powerOnChar) {
                SPEAKER_CONTENTS.POWER_ON_CHARACTERISTIC = powerOnChar;
            }

            peripheral.connect(error => {
                peripheral.discoverSomeServicesAndCharacteristics(
                    SPEAKER_CONTENTS.PRIMARY_SERVICE_UUID,
                    SPEAKER_CONTENTS.POWER_ON_UUID,
                    (error, services, chars) => {
                        APP_WINDOW.webContents.send('stored-power-characteristic');
                        storePowerOnCharacteristic(chars[0]);
                        noble.stopScanning();
                    });
            });
        }
    });
}
_INIT_SCAN_FOR_SPEAKER();

function _TURN_ON_SPEAKER() {
    const powerOnBuffer = Buffer.from([0xEC, 0x5C, 0x68, 0x4A, 0xAD, 0x5C, 0x01]);
    SPEAKER_CONTENTS.POWER_ON_CHARACTERISTIC.write(powerOnBuffer, true, error => {
        console.log(error);
    });
    noble.startScanning();
}

ipcMain.on('turn-on-speaker', (event, arg) => {
    _TURN_ON_SPEAKER();
    APP_WINDOW.webContents.send('toggle-speaker-off');
});