(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('javascript-utilities/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 1000000;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        result = core.getSolution(target);

    console.log(`The starting number under ${target} that produces the ` +
        `largest chain is ${result}`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();