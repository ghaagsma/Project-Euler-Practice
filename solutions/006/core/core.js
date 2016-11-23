(() => {
    'use strict';

    let getDifference = (target) => {
        let sumOfSquares = 0,
            squareOfSum = 0;

        for (let i = 1; i <= target; ++i) {
            sumOfSquares += i * i;
            squareOfSum += i;
        }
        squareOfSum *= squareOfSum;

        return squareOfSum - sumOfSquares;
    };

    module.exports = {
        getDifference: getDifference
    };
})();
