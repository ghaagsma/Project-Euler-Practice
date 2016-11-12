(() => {
    'use strict';

    let findSum = function (limit) {
        let result = 0,
            curr = 1,
            prev = 1;
        while (curr <= limit) {
            curr = curr + prev;
            prev = curr - prev;
            if (curr % 2 === 0) {
                result += curr;
            }
        }
        return result;
    };

    module.exports = {
        findSum: findSum
    };
})();
