(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('euler-common/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 1000;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        result = core.getProduct(target);

    console.log(`The answer is ${result}`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
