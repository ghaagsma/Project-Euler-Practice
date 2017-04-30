(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('javascript-utilities/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 20;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        result = core.getSmallestDivisibleValue(target);

    console.log(`The smallest positive number that is evenly divisible by all ` +
        `of the numbers from 1 to ${target} is ${result}`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
