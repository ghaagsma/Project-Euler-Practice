(() => {
    'use strict';

    let factors = require('euler-common/src/factors');

    let getSolution = (target) => {
        let i = 1,
            curr = 1;
        while (1) {
            if (factors.getFactors(curr).length > target) {
                return curr;
            }
            ++i;
            curr += i;
        }
    };

    module.exports = {
        getSolution: getSolution
    };
})();
