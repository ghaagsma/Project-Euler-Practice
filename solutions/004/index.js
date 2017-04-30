(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('javascript-utilities/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 3;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        result = core.getLargestPalindromeProduct(target);

    console.log(`The largest palindrome made from the product of two ` +
        `${target}-digit numbers is ${result}`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
