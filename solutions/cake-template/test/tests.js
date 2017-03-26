(() => {
    'use strict';

    let chai = require('chai'),
        // BinaryTreeNode = require('javascript-utilities/src/binary-tree-node'),
        solution = require('../solution'),
        expect;

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('second-largest-item-in-bst', () => {
        it('should throw an error if the input is invalid', () => {
            expect(() => {
                solution.solve(null);
            }).to.throw(Error);
        });

        it('should solve the problem', () => {

        });
    });
})();
