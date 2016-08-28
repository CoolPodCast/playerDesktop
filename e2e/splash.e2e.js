import { expect } from 'chai';
import testUtils from './utils';

describe('application launch', function () {

    beforeEach(testUtils.beforeEach);
    afterEach(testUtils.afterEach);

    it('deve exibir o título na tela de splash', function () {
        return this.app.client.getText('#title').then(function (text) {
            expect(text).to.equal('CoolPodCast');
        });
    });
});
