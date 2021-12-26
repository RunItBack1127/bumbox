const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("ipc", {
    send: (channel) => {
        ipcRenderer.send(channel);
    },
    on: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
});