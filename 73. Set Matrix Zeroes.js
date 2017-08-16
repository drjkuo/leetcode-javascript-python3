/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // check 1st row
    var firstRowZero = false;
    for (var i=0; i<matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // check 1st col
    var firstColZero = false;
    for (i=0; i<matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    for (var i=0; i<matrix.length; i++) {
        for (var j=0; j<matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                // matrix[i][j]=1;
                matrix[i][0]=0;
                matrix[0][j]=0;
            }
        }
    }

    for (var i=1; i<matrix.length; i++) {
        for (var j=1; j<matrix[0].length; j++) {
            if (matrix[i][0]===0 || matrix[0][j]===0)
                matrix[i][j] = 0;
        }
    }

    if (firstRowZero === true) {
        for (var i=0; i<matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }

    if (firstColZero === true) {
        for (var i=0; i<matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

    return;
};
