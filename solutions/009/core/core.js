(() => {
    'use strict';

    let getProduct = (target) => {
        for (let a = 1; a <= target; ++a) {
            for (let b = a + 1; b <= target; ++b) {
                let c = target - a - b;
                if (a * a + b * b === c * c)
                    return a * b * c;
            }
        }
        return target;
    };

    module.exports = {
        getProduct: getProduct
    };
})();
