/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    var result = [];

    var left = 0;
    var top = 0;
    var bottom = matrix.length-1;
    var right = matrix[0].length-1;


    while (left < right && top < bottom) {
        var i,j;
        for (j=left; j<right; j++) result.push(matrix[top][j]);
        for (i=top; i<bottom; i++) result.push(matrix[i][right]);
        for (j=right; j>left; j--) result.push(matrix[bottom][j]);
        for (i=bottom; i>top; i--) result.push(matrix[i][left]);
        left++;
        right--;
        top++;
        bottom--;
    }

    if (left === right) {
        for (i=top; i<=bottom; i++) result.push(matrix[i][left]);
    }
    else if (top === bottom) {
        for (j=left; j<=right; j++) result.push(matrix[top][j]);
    }

    return result;

};
