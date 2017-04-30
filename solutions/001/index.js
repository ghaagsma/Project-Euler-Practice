(() => {
    'use strict';

    let core = require('./core/core'),
        inputParser = require('javascript-utilities/src/input-parser'),
        now = require('performance-now');

    let startTime = now();

    const defaultTarget = 1000;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget;

    console.log(`The sum of all the multiples of 3 or 5 ` +
        `below ${target} is ${core.findSum(target)}.`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
