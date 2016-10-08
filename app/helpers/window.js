'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name, options, noRestore) {

    var userDataDir = _fsJetpack2.default.cwd(_electron.app.getPath('userData'));
    var stateStoreFile = 'window-state-' + name + '.json';
    var defaultSize = {
        width: options.width,
        height: options.height
    };
    var state = {};
    var win;

    var restore = function restore() {
        var restoredState = {};
        try {
            restoredState = userDataDir.read(stateStoreFile, 'json');
        } catch (err) {
            // For some reason json can't be read (might be corrupted).
            // No worries, we have defaults.
        }
        return Object.assign({}, defaultSize, restoredState);
    };

    var getCurrentPosition = function getCurrentPosition() {
        var position = win.getPosition();
        var size = win.getSize();
        return {
            x: position[0],
            y: position[1],
            width: size[0],
            height: size[1]
        };
    };

    var windowWithinBounds = function windowWithinBounds(windowState, bounds) {
        return windowState.x >= bounds.x && windowState.y >= bounds.y && windowState.x + windowState.width <= bounds.x + bounds.width && windowState.y + windowState.height <= bounds.y + bounds.height;
    };

    var resetToDefaults = function resetToDefaults(windowState) {
        var bounds = _electron.screen.getPrimaryDisplay().bounds;
        return Object.assign({}, defaultSize, {
            x: (bounds.width - defaultSize.width) / 2,
            y: (bounds.height - defaultSize.height) / 2
        });
    };

    var ensureVisibleOnSomeDisplay = function ensureVisibleOnSomeDisplay(windowState) {
        var visible = _electron.screen.getAllDisplays().some(function (display) {
            return windowWithinBounds(windowState, display.bounds);
        });
        if (!visible) {
            // Window is partially or fully not visible now.
            // Reset it to safe defaults.
            return resetToDefaults(windowState);
        }
        return windowState;
    };

    var saveState = function saveState() {
        if (!win.isMinimized() && !win.isMaximized()) {
            Object.assign(state, getCurrentPosition());
        }
        userDataDir.write(stateStoreFile, state, { atomic: true });
    };

    if (!noRestore) {
        state = ensureVisibleOnSomeDisplay(restore());
    }

    win = new _electron.BrowserWindow(Object.assign({}, options, state));

    win.on('close', saveState);

    return win;
};

var _electron = require('electron');

var _fsJetpack = require('fs-jetpack');

var _fsJetpack2 = _interopRequireDefault(_fsJetpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }