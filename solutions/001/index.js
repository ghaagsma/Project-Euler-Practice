(() => {
    'use strict';

    let core = require('./core/core'),
        now = require('performance-now');

    let startTime = now(),
        limit = 1000;

    console.log(`The sum of all the multiples of 3 or 5 ` +
        `below ${limit} is ${core.findSum(limit)}.`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
