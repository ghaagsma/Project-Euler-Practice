(() => {
    'use strict';

    let isPrime = function (value) {
        if (value <= 1)
            return false;
        if (value === 2)
            return true;
        for (let i = 2, lim = value; i <= lim; ++i) {
            if (value % i === 0) {
                return false;
            }
            lim = value / i;
        }
        return true;
    };

    module.exports = {
        isPrime: isPrime
    };
})();
