(() => {
    'use strict';

    let factors = require('javascript-utilities/src/factors'),
        primes = require('javascript-utilities/src/primes');

    let getLargestPrimeFactor = function (num) {
        let allFactors = factors.getFactors(num);
        for (let i = allFactors.length - 1; i >= 0; --i) {
            if (primes.isPrime(allFactors[i])) {
                return allFactors[i];
            }
        }
        return -1;
    };

    module.exports = {
        getLargestPrimeFactor: getLargestPrimeFactor
    };
})();
