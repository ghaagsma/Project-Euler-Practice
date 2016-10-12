(() => {
    'use strict';
    let startTime = process.hrtime();

    let trimLeadingZeros = function (str) {
        while (str.length && str[0] === '0') {
            str = str.slice(1);
        }
        return str;
    };

    let compareStrings = function (str1, str2) {
        let l1 = str1.length,
            l2 = str2.length;
        if (l1 > l2) {
            return 1;
        }
        if (l2 > l1) {
            return -1;
        }
        for (var i = 0; i < l1; ++i) {
            let c1 = str1[i],
                c2 = str2[i];
            if (c1 > c2)
                return 1;
            if (c2 > c1)
                return -1;
        }
        return 0;
    };

    let addChars = function (c1, c2, c3) {
        c1 = c1 || '0';
        c2 = c2 || '0';
        c3 = c3 || '0';
        let result = parseInt(c1) + parseInt(c2) + parseInt(c3);
        if (result >= 10) {
            return {
                val: (result - 10).toString(),
                carry: '1'
            };
        }
        return {
            val: result.toString(),
            carry: '0'
        };
    };

    let addStrings = function (str1, str2) {
        str1 = trimLeadingZeros(str1);
        str2 = trimLeadingZeros(str2);

        if (str1.length === 0) {
            return str2;
        }
        if (str2.length === 0) {
            return str1;
        }

        // Ensure str2 is greater than or equal to str1
        if (compareStrings(str1, str2) > 0) {
            let temp = str1;
            str1 = str2;
            str2 = temp;
        }

        let result = '',
            carry = '0',
            len1 = str1.length,
            len2 = str2.length;
        for (let i = len2 - 1; i >= 0; --i) {
            let index1 = i - (len2 - len1),
                char1 = len1 > index1 ?
                str1[index1] :
                '0';
            let addResult = addChars(str2[i], char1, carry);
            result = addResult.val + result;
            carry = addResult.carry;
        }
        if (carry === '1') {
            result = carry + result;
        }
        return result;
    };

    let prev = '1',
        curr = '1',
        index = 2,
        temp,
        digits = 1000,
        target = '1';

    for (let i = 1; i < digits; ++i) {
        target = target + '0';
    }

    while (compareStrings(target, curr) > 0) {
        temp = prev;
        prev = curr;
        curr = addStrings(temp, prev);
        index++;
    }

    console.log('Index: ' + index);
    
    let endTime = process.hrtime(startTime),
        duration = Math.round((endTime[0]*1000) + (endTime[1]/1000000));
    console.log(`Execution time: ${duration}ms`);
})();
