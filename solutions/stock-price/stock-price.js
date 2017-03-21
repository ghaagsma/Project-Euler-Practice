(() => {
    'use strict';

    let getMaxProfit = (prices) => {
        let maxProfit = 0,
            buyIndex = 0,
            sellIndex = 0,
            minPrice,
            minIndex;
        prices.map((price, index) => {
            if (index === 0 || price < minPrice) {
                minPrice = price;
                minIndex = index;
            }
            if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
                buyIndex = minIndex;
                sellIndex = index;
            }
        });
        return {
            profit: maxProfit,
            buyIndex: buyIndex,
            sellIndex: sellIndex
        };
    };

    module.exports = {
        getMaxProfit: getMaxProfit
    };
})();
