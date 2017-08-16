/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    var i = 0,
        j = matrix[0].length - 1;

    while ((i<= matrix.length-1) && j>=0) {
        if (matrix[i][j] === target) {
            return true;
        }

        if (matrix[i][j] < target) {
            i++;
        }
        else if (matrix[i][j] > target) {
            j--;
        }
    }

    return false;

};
