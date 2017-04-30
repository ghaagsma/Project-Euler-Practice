(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('javascript-utilities/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 10001;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        result = core.getSolution(target);

    let onesDigit = target % 10,
        suffix;

    if (onesDigit === 1)
        suffix = 'st';
    else if (onesDigit === 2)
        suffix = 'nd';
    else if (onesDigit === 3)
        suffix = 'rd';
    else
        suffix = 'th';

    console.log(`The ${target}${suffix} prime number is ${result}.`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
