import { expect } from 'chai';
import { getTitle, getDescription } from './splash';
import env from '../env';

describe("Gets Splash", function () {

    it("getTitle", function () {
        expect(getTitle()).to.equal('CoolPodCast');
    });

    it("getDescription", function () {
        expect(getDescription()).to.equal('Tela de splash do aplicativo, carregar aqui toda base do sistema!');
    });

    it("should load test environment variables", function () {
        expect(env.name).to.equal('test');
        expect(env.description).to.equal('Add here any environment specific stuff you like.');
    });

});
