import electron from 'electron';
import { Application } from 'spectron';

var beforeEach = function () {
    this.timeout(20000);
    this.app = new Application({
        path: electron,
        args: ['app'],
        startTimeout: 20000,
        waitTimeout: 20000,
    });
    return this.app.start();
};

var afterEach = function () {
    this.timeout(20000);
    if (this.app && this.app.isRunning()) {
        return this.app.stop();
    }
};

export default {
    beforeEach: beforeEach,
    afterEach: afterEach,
};
