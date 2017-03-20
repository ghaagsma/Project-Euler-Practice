(() => {
    'use strict';

    let getLargestProfit = (prices) => {
        let largestProfit = 0,
            buyIndex = 0,
            sellIndex = 0,
            minPrice,
            minIndex;
        prices.map((price, index) => {
            if (index === 0 || price < minPrice) {
                minPrice = price;
                minIndex = index;
            }
            if (price - minPrice > largestProfit) {
                largestProfit = price - minPrice;
                buyIndex = minIndex;
                sellIndex = index;
            }
        });
        return {
            profit: largestProfit,
            buyIndex: buyIndex,
            sellIndex: sellIndex
        };
    };

    module.exports = {
        getLargestProfit: getLargestProfit
    };
})();
