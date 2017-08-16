/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var row = [];
    var col = [];
    for (var i=0; i<matrix.length; i++) {
        for (var j=0; j<matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row.push(i);
                col.push(j);
            }
        }
    }

    for (var i=0; i<matrix.length; i++) {
        for (var j=0; j<matrix[0].length; j++) {
            if ((row.indexOf(i) > -1) || (col.indexOf(j) > -1))
                matrix[i][j] = 0;
        }
    }

    return;
};
