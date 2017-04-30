(() => {
    'use strict';

    let primes = require('javascript-utilities/src/primes');

    let getSolution = (target) => {
        let numPrimes = 1, // 2 is prime
            i = 1;
        while (numPrimes < target) {
            ++i;
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
