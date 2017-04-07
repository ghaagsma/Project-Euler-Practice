(() => {
    'use strict';

    let initializeMinimalPathSums = (minimalPathSums, matrix) => {
        matrix.forEach(() => minimalPathSums.push([]));
        minimalPathSums[0].push(matrix[0][0]);

        // Initialize top row
        for (let i = 1; i < matrix[0].length; ++i) {
            minimalPathSums[0].push(minimalPathSums[0][i - 1] + matrix[0][i]);
        }

        // Initialize left-most column
        for (let i = 1; i < matrix.length; ++i) {
            minimalPathSums[i].push(minimalPathSums[i - 1][0] + matrix[i][0]);
        }
    };

    let fillMinimalPathSums = (minimalPathSums, matrix) => {
        for (let row = 1; row < matrix.length; ++row) {
            for (let col = 1; col < matrix[0].length; ++col) {
                let value = matrix[row][col] + Math.min(
                    minimalPathSums[row][col - 1],
                    minimalPathSums[row - 1][col]);
                minimalPathSums[row][col] = value;
            }
        }
    };

    let getSolution = (matrix) => {
        if (!matrix || !matrix.length || !matrix[0].length) {
            return 0;
        }

        let minimalPathSums = [];
        initializeMinimalPathSums(minimalPathSums, matrix);
        fillMinimalPathSums(minimalPathSums, matrix);

        return minimalPathSums[matrix.length - 1][matrix[0].length - 1];
    };

    module.exports = {
        getSolution: getSolution
    };
})();