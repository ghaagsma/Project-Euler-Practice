(() => {
    'use strict';

    let isDivisible = (num, target) => {
        for (let i = 2; i <= target; ++i) {
            if (num % i !== 0)
                return false;
        }
        return true;
    };

    let getSmallestDivisibleValue = (target) => {
        let result = 1;
        while (1) {
            if (isDivisible(result, target))
                return result;
            result++;
        }
    };

    module.exports = {
        getSmallestDivisibleValue: getSmallestDivisibleValue
    };
})();
