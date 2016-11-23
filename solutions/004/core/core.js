(() => {
    'use strict';

    let stringUtilities = require('euler-common/src/string-utilities');

    let getLargestPalindromeProduct = (digits) => {
        let upperLimit = Math.pow(10, digits),
            lowerLimit = Math.pow(10, digits - 1),
            result = 0;
        for (let i = upperLimit - 1; i >= lowerLimit; --i) {
            for (let j = upperLimit - 1; j >= lowerLimit; --j) {
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
