(() => {
    'use strict';

    let stringUtilities = require('javascript-utilities/src/string-utilities');

    let getIndexForDigits = function (digits) {
        let prev = '1',
            curr = '1',
            index = 2,
            temp,
            target = '1';

        for (let i = 1; i < digits; ++i) {
            target = target + '0';
        }

        while (stringUtilities.compare(target, curr) > 0) {
            temp = prev;
            prev = curr;
            curr = stringUtilities.add(temp, prev);
            index++;
        }

        return index;
    };

    module.exports = {
        getIndexForDigits: getIndexForDigits
    };
})();
