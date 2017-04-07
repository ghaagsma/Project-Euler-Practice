(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('euler-common/src/input-parser'),
        core = require('./core/core');

    let defaultInputFilePath = 'test/matrix.txt',
        input = process.argv[2],
        inputFilePath = input || defaultInputFilePath;

    inputParser.parseFileAsync(inputFilePath).then((data) => {
        let startTime = now(),
            matrix = data.map(
                row => row.split(',').map(value => parseInt(value))
            ),
            result = core.getSolution(matrix);

        console.log(`The minimal path sum is ${result}.`);

        let duration = (now() - startTime).toFixed(3);
        console.log(`Execution time: ${duration}ms`);
    });
})();