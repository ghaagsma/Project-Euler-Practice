(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        largestProfit = require('../largest-profit');

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('largest-profit', () => {
        it('should calculate the largest profit', () => {
            let prices = [];
            largestProfit.getLargestProfit(prices).profit.should.equal(0);

            prices = [3,2,1];
            largestProfit.getLargestProfit(prices).profit.should.equal(0);
            largestProfit.getLargestProfit(prices).buyIndex.should.equal(0);
            largestProfit.getLargestProfit(prices).sellIndex.should.equal(0);

            prices = [1,2,3];
            largestProfit.getLargestProfit(prices).profit.should.equal(2);
            largestProfit.getLargestProfit(prices).buyIndex.should.equal(0);
            largestProfit.getLargestProfit(prices).sellIndex.should.equal(2);

            prices = [1,2,3,0];
            largestProfit.getLargestProfit(prices).profit.should.equal(2);
            largestProfit.getLargestProfit(prices).buyIndex.should.equal(0);
            largestProfit.getLargestProfit(prices).sellIndex.should.equal(2);

            prices = [1,2,3,0,3];
            largestProfit.getLargestProfit(prices).profit.should.equal(3);
            largestProfit.getLargestProfit(prices).buyIndex.should.equal(3);
            largestProfit.getLargestProfit(prices).sellIndex.should.equal(4);
        });
    });
})();
