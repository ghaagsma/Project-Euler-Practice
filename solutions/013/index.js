(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('euler-common/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 10;

    let input = process.argv[2],
        target = inputParser.isInteger(input) ? parseInt(input) : defaultTarget,
        inputFilePath = 'input/test.txt'; // todo: accept path as input

    inputParser.parseFileAsync(inputFilePath).then((data) => {
        let result = core.getSolution(data, target);

        console.log(`The first ${target} digits of the sum of the one-hundred ` +
            `50-digit numbers is ${result}`);

        let duration = (now() - startTime).toFixed(3);
        console.log(`Execution time: ${duration}ms`);
    });
})();
