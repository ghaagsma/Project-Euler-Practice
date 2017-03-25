(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('euler-common/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 10000000;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        result = core.getSolution(target);

    console.log(`${result} starting numbers below ${target} will arrive at 89.`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
