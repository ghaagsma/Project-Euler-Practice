(() => {
    'use strict';

    let chai = require('chai'),
        stringUtilities = require('../src/string-utilities');

    before(() => {
        chai.should();
    });

    describe('string-utilities', () => {
        describe('compare', () => {
            it('should compare strings of equal length', () => {
                let a = '123',
                    b = '456';

                stringUtilities.compare(a, b).should.equal(-1);
                stringUtilities.compare(a, a).should.equal(0);
                stringUtilities.compare(b, b).should.equal(0);
                stringUtilities.compare(b, a).should.equal(1);
            });

            it('should compare strings with leading \'0\'s', () => {
                let a = '0000123',
                    b = '456',
                    c = '123';

                stringUtilities.compare(a, b).should.equal(-1);
                stringUtilities.compare(b, a).should.equal(1);
                stringUtilities.compare(a, c).should.equal(0);
            });

            it('should compare strings of non-equal length', () => {
                let a = '1230',
                    b = '456';

                stringUtilities.compare(a, b).should.equal(1);
                stringUtilities.compare(b, a).should.equal(-1);
            });
        });

        describe('add', () => {
            it('should add strings', () => {
                let a = '123',
                    b = '456';

                stringUtilities.add(a, b).should.equal('579');
            });
        });
    });
})();
