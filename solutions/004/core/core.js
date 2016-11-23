(() => {
    'use strict';

    let stringUtilities = require('euler-common/src/string-utilities');

    let getLargestPalindromeProduct = (digits) => {
        let limit = Math.pow(10, digits),
            result = 0;
        for (let i = limit - 1; i > 0; --i) {
            for (let j = limit - 1; j > 0; --j) {
                let product = i * j;
                if (stringUtilities.isPalindrome(product.toString()) &&
                    product > result) {
                    result = product;
                }
            }
        }
        return result;
    };

    module.exports = {
        getLargestPalindromeProduct: getLargestPalindromeProduct
    };
})();
