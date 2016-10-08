'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.devMenuTemplate = undefined;

var _electron = require('electron');

var devMenuTemplate = exports.devMenuTemplate = {
    label: 'Development',
    submenu: [{
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function click() {
            _electron.BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
        }
    }, {
        label: 'Toggle DevTools',
        accelerator: 'Alt+CmdOrCtrl+I',
        click: function click() {
            _electron.BrowserWindow.getFocusedWindow().toggleDevTools();
        }
    }, {
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click: function click() {
            _electron.app.quit();
        }
    }]
};