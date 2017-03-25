(() => {
    'use strict';

    let stringUtilities = require('euler-common/src/string-utilities');

    let getSolution = (data, target) => {
        let result = '0';
        data.map((value) => {
            result = stringUtilities.add(result, value);
        });
        return result.substr(0, target);
    };

    module.exports = {
        getSolution: getSolution
    };
})();
