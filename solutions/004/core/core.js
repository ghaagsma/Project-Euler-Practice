(() => {
    'use strict';

    let stringUtilities = require('javascript-utilities/src/string-utilities');

    let getLargestPalindromeProduct = (digits) => {
        let upperLimit = Math.pow(10, digits),
            lowerLimit = Math.pow(10, digits - 1),
            result = 0;
        for (let i = upperLimit - 1; i >= lowerLimit; --i) {
            for (let j = i; j >= lowerLimit; --j) {
                let product = i * j;
                if (product > result &&
                    stringUtilities.isPalindrome(product.toString())) {
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
