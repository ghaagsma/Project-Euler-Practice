(() => {
    'use strict';

    let primes = require('javascript-utilities/src/primes');

    let getSumOfPrimes = (limit) => {
        let result = 2;
        for (let i = 3; i < limit; i += 2) {
            if (primes.isPrime(i))
                result += i;
        }
        return result;
    };

    module.exports = {
        getSumOfPrimes: getSumOfPrimes
    };
})();
