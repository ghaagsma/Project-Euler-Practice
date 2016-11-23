(() => {
    'use strict';

    let isDivisible = (num, target) => {
        for (let i = target; i > 1; --i) {
            if (num % i !== 0)
                return false;
        }
        return true;
    };

    let getSmallestDivisibleValue = (target) => {
        let result = target;
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
