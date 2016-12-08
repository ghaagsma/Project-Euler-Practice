(() => {
    'use strict';

    let findSumHelper = (multiple, limit) => {
        let result = 0;
        for (let i = multiple; i < limit; i += multiple) {
            result += i;
        }
        return result;
    };

    let findSum = (limit) => {
        return findSumHelper(3, limit) +
            findSumHelper(5, limit) -
            findSumHelper(15, limit);
    };

    module.exports = {
        findSum: findSum
    };
})();
