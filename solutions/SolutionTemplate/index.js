(() => {
    'use strict';

    let now = require('performance-now');

    let startTime = now();

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
