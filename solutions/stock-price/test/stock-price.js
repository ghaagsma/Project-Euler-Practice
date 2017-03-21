(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        stockPrice = require('../stock-price');

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('stock-price', () => {
        it('should calculate the maximum profit', () => {
            let prices = [];
            stockPrice.getMaxProfit(prices).profit.should.equal(0);

            prices = [3,2,1];
            stockPrice.getMaxProfit(prices).profit.should.equal(0);
            stockPrice.getMaxProfit(prices).buyIndex.should.equal(0);
            stockPrice.getMaxProfit(prices).sellIndex.should.equal(0);

            prices = [1,2,3];
            stockPrice.getMaxProfit(prices).profit.should.equal(2);
            stockPrice.getMaxProfit(prices).buyIndex.should.equal(0);
            stockPrice.getMaxProfit(prices).sellIndex.should.equal(2);

            prices = [1,2,3,0];
            stockPrice.getMaxProfit(prices).profit.should.equal(2);
            stockPrice.getMaxProfit(prices).buyIndex.should.equal(0);
            stockPrice.getMaxProfit(prices).sellIndex.should.equal(2);

            prices = [1,2,3,0,3];
            stockPrice.getMaxProfit(prices).profit.should.equal(3);
            stockPrice.getMaxProfit(prices).buyIndex.should.equal(3);
            stockPrice.getMaxProfit(prices).sellIndex.should.equal(4);
        });
    });
})();
