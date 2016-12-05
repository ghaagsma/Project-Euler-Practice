(() => {
    'use strict';

    let getVerticalProduct = (grid, n, startRow, column) => {
        let result = 1
        for (let i = 0; i < n; ++i)
            result *= grid[startRow + i][column];
        return result;
    };

    let getHorizontalProduct = (grid, n, row, startColumn) => {
        let result = 1;
        for (let i = 0; i < n; ++i)
            result *= grid[row][startColumn + i];
        return result;
    };

    let getDiagonalProduct = (grid, n, startRow, startColumn) => {
        let result = 1;
        for (let i = 0; i < n; ++i)
            result *= grid[startRow + i][startColumn + i];
        return result;
    };

    let getAltDiagonalProduct = (grid, n, startRow, startColumn) => {
        let result = 1;
        for (let i = 0; i < n; ++i) {
            result *= grid[startRow + i][startColumn + n - i - 1];
        }
        return result;
    };

    let getLargestProduct = (grid, n) => {
        let result = {
                product: -1
            },
            height = grid.length,
            width = grid[0].length;
        for (let i = 0; i <= height - n; ++i) {
            for (let j = 0; j <= width - n; ++j) {
                let vertical = getVerticalProduct(grid, n, i, j),
                    horizontal = getHorizontalProduct(grid, n, i, j),
                    diagonal = getDiagonalProduct(grid, n, i, j),
                    altDiagonal = getAltDiagonalProduct(grid, n, i, j),
                    max = Math.max(vertical, horizontal, diagonal, altDiagonal);
                if (max > result.product) {
                    result = {
                        product: max,
                        row: i,
                        column: j
                    };
                }
            }
        }
        return result;
    };

    module.exports = {
        getLargestProduct: getLargestProduct
    };
})();
