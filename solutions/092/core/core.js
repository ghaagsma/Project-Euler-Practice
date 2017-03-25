(() => {
    'use strict';

    let cache = [];

    let chain = (n) => {
        let result = 0;
        while (n > 0) {
            result += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        return result;
    };

    let updateCache = (result, localCache) => {
        let length = localCache.length;
        for (let i = 0; i < length; ++i) {
            cache[localCache[i]] = result;
        }
    };

    let reachesEightyNine = (n) => {
        let curr = n,
            localCache = [];
        while (curr !== 1 && curr !== 89) {
            localCache.push(curr);
            if (typeof (cache[curr]) !== 'undefined') {
                updateCache(cache[curr], localCache);
                return cache[curr];
            }
            curr = chain(curr);
        }
        updateCache(curr === 89, localCache);
        return curr === 89;
    };

    let getSolution = (limit) => {
        let result = 0;
        for (let i = 2; i < limit; ++i) {
            if (reachesEightyNine(i))
                ++result;
        }
        return result;
    };

    module.exports = {
        getSolution: getSolution
    };
})();
