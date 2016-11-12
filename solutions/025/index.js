(() => {
    'use strict';

    let core = require('./core/core'),
        inputParser = require('../common/src/input-parser'),
        now = require('performance-now');

    let startTime = now();

    const defaultDigits = 1000;

    let input = process.argv[2],
        digits = inputParser.isInteger(input) ? parseInt(input) : defaultDigits,
        result = core.getIndexForDigits(digits);

    console.log(`The index of the first term in the Fibonacci sequence to ` +
        `contain ${digits} digits is ${result}`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
