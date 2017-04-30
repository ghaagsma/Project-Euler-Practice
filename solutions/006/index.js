(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('javascript-utilities/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 100;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        result = core.getDifference(target);

    console.log(`The difference between the sum of the squares of the first ` +
        `${target} natural numbers and the square of the sum is ${result}`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
