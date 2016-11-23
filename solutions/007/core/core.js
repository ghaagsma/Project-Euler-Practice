(() => {
    'use strict';

    let primes = require('euler-common/src/primes');

    let getSolution = (target) => {
        let numPrimes = 0,
            i = 1;
        while (numPrimes < target) {
            ++i;
            if (primes.isPrime(i))
                ++numPrimes;
        }
        return i;
    };

    module.exports = {
        getSolution: getSolution
    };
})();
