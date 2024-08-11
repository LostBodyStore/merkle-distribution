const {expect} = require('chai');
const {DropSettings} = require('./../src/gen_qr_lib');
const {NFTDropSettings} = require("../src/nft_drop/gen_nft_lib");

describe('DropSettings', function () {
    it('should have the correct default pathQr', function () {
        const settings = new DropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.pathQr).to.equal('./src/qr');
    });

    it('should have the correct default pathTestQr', function () {
        const settings = new DropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.pathTestQr).to.equal('./src/test_qr');
    });

    it('should have the correct default pathZip', function () {
        const settings = new DropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.pathZip).to.equal('./src/gendata');
    });

    it('should have the correct fileLatest path', function () {
        const settings = new DropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.fileLatest).to.equal('./src/.latest');
    });

    it('should correctly generate the fileLinks path', function () {
        const settings = new DropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.fileLinks).to.equal('./src/gendata/v1.0-qr-links.json');
    });

    it('should have the correct prefix', function () {
        const settings = new DropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.prefix).to.equal('https://app.1inch.io/#/1/qr?');
    });
});


describe('NFTDropSettings', function () {
    it('should have the correct default pathQr', function () {
        const settings = new NFTDropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.pathQr).to.equal('./src/nft_drop/qr');
    });

    it('should have the correct default pathTestQr', function () {
        const settings = new NFTDropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.pathTestQr).to.equal('./src/nft_drop/test_qr');
    });

    it('should have the correct default pathZip', function () {
        const settings = new NFTDropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.pathZip).to.equal('./src/nft_drop/gendata');
    });

    it('should have the correct fileLatest path', function () {
        const settings = new NFTDropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.fileLatest).to.equal('./src/nft_drop/.latest');
    });

    it('should correctly generate the fileLinks path', function () {
        const settings = new NFTDropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.fileLinks).to.equal('./src/nft_drop/gendata/v1.0-qr-links.json');
    });

    it('should have the correct prefix', function () {
        const settings = new NFTDropSettings(true, true, 100, 200, 'v1.0', 1);
        expect(settings.prefix).to.equal('https://app.1inch.io/#/1/qr?');
    });
});
