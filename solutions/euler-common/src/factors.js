(() => {
    'use strict';

    let getFactors = function (num) {
        if (num <= 0) {
            throw 'Invalid input';
        }
        if (num === 2) {
            return [1, 2];
        }
        let result = [];
        for (let i = 1, lim = num; i <= lim; ++i) {
            let quotient = num / i;
            if (num % i === 0) {
                result.push(i);
                if (i !== quotient)
                    result.push(num / i);
            }
            lim = Math.floor(quotient);
        }
        result.sort((a, b) => {
            if (a < b) return -1;
            if (b < a) return 1;
            return 0;
        });
        return result;
    };

    module.exports = {
        getFactors: getFactors
    };
})();
