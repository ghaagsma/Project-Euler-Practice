(() => {
    'use strict';

    let cache = [];

    let next = current =>
        current % 2 === 0 ? current / 2 : 3 * current + 1;

    let cacheChain = (chain, length) => {
        chain.forEach((value) => {
            cache[value] = length--;
        });
    };

    let getChainSize = (value) => {
        let current = value,
            chain = [];
        while (current !== 1) {
            if (cache[current]) {
                let result = cache[current] + chain.length;
                cacheChain(chain, result);
                return result;
            }
            chain.push(current);
            current = next(current);
        }
        cacheChain(chain, chain.length + 1);
        return chain.length + 1;
    };

    let getSolution = (target) => {
        let largestChainSize = 0,
            startingNumberWithLargestChain;

        for (let startingNumber = 1; startingNumber < target; ++startingNumber) {
            let chainSize = getChainSize(startingNumber);
            if (chainSize > largestChainSize) {
                largestChainSize = chainSize;
                startingNumberWithLargestChain = startingNumber;
            }
        }

        return startingNumberWithLargestChain;
    };

    module.exports = {
        getSolution: getSolution
    };
})();