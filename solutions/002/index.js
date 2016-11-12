(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('euler-common/src/input-parser'),
        evenFibonacci = require('./core/even-fibonacci');

    let startTime = now();

    const defaultLimit = 4000000;

    let input = process.argv[2],
        limit = inputParser.isInteger(input) ? parseInt(input) : defaultLimit,
        result = evenFibonacci.findSum(limit);

    console.log(`The sum of the even terms in the Fibonacci sequence whose `+
      `values do not exceed ${limit} is ${result}.`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
