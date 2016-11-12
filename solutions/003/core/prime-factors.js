(() => {
    'use strict';

    let factors = require('euler-common/src/factors'),
        primes = require('euler-common/src/primes');

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
