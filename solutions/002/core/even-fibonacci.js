(() => {
    'use strict';

    let findSum = function (limit) {
        let result = 0,
            curr = 2,
            prev = 1;
        while (curr <= limit) {
            if (curr % 2 === 0) {
                result += curr;
            }
            curr = curr + prev;
            prev = curr - prev;
        }
        return result;
    };

    module.exports = {
        findSum: findSum
    };
})();
