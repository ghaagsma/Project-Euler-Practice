(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('euler-common/src/input-parser'),
        primeFactors = require('./core/prime-factors');

    let startTime = now();

    const defaultTarget = 600851475143;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        result = primeFactors.getLargestPrimeFactor(target);

    if (result === -1) {
        console.log(`There are no prime factors of ${target}`);
    } else {
        console.log(`The largest prime factor of the number ${target} is ` +
            `${result}.`);
    }

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
