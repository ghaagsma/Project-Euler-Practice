(() => {
    'use strict';

    let getHighestProduct = (ints) => {
        if (!ints || ints.length < 3) {
            throw new Error('Expected array of length 3 or more.');
        }
        let max = ints[0],
            min = max,
            hp2 = 0,
            lp2 = 0,
            hp3 = 0;
        for (let i = 1; i < ints.length; ++i) {
            hp3 = Math.max(hp3, hp2 * ints[i], lp2 * ints[i]);
            hp2 = Math.max(hp2, max * ints[i], min * ints[i]);
            lp2 = Math.min(lp2, max * ints[i], min * ints[i]);
            max = Math.max(max, ints[i]);
            min = Math.min(min, ints[i]);
        }
        return hp3;
    };

    module.exports = {
        getHighestProduct: getHighestProduct
    };
})();
