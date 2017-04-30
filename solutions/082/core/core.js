(() => {
    'use strict';

    let getInitialMinimalPathSums = (matrix) => {
        let minimalPathSums = [];
        matrix.forEach(() => minimalPathSums.push([]));

        // Initialize left-most column
        for (let i = 0; i < matrix.length; ++i) {
            minimalPathSums[i].push(matrix[i][0]);
        }

        return minimalPathSums;
    };

    let fillMinimalPathSums = (minimalPathSums, matrix) => {
        let numColumns = matrix[0].length,
            numRows = matrix.length;

        // For each column from left to right (excluding initial column)
        for (let column = 1; column < numColumns; ++column) {
            // For each element in the column
            for (let row = 0; row < numRows; ++row) {
                // Initialize value by calculating value of moving from element
                // directly to the left
                minimalPathSums[row][column] = minimalPathSums[row][column - 1] +
                    matrix[row][column];
            }

            // For each element in the column (top to bottom, excluding top row)
            for (let row = 1; row < numRows; ++row) {
                // Set value to minimum of current value, value of moving from
                // above
                minimalPathSums[row][column] = Math.min(
                    minimalPathSums[row][column],
                    minimalPathSums[row - 1][column] + matrix[row][column]);
            }

            // For each element in the column (bottom to top, excluding bottom
            // row)
            for (let row = numRows - 2; row >= 0; --row) {
                // Set value to minimum of current value, value of moving from
                // below
                minimalPathSums[row][column] = Math.min(
                    minimalPathSums[row][column],
                    minimalPathSums[row + 1][column] + matrix[row][column]);
            }
        }
    };

    let getMinimalPathSum = (minimalPathSums) => {
        let result = Infinity;
        minimalPathSums.forEach((row) => {
            result = Math.min(result, row[row.length - 1]);
        });
        return result;
    };

    let getSolution = (matrix) => {
        if (!matrix || !matrix.length || !matrix[0].length) {
            return 0;
        }

        let minimalPathSums = getInitialMinimalPathSums(matrix);
        fillMinimalPathSums(minimalPathSums, matrix);

        return getMinimalPathSum(minimalPathSums);
    };

    module.exports = {
        getSolution: getSolution
    };
})();