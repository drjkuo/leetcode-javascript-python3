/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0) return 0;
    var result = [];
    var maxlen = 0;
    var nRow = matrix.length;
    var nCol = matrix[0].length;
    var oneRow = [];
    for (var i=0; i<nCol; i++) oneRow.push(false);
    var visited = [];
    resetVisited();

    function resetVisited() {
        visited = [];
        for (var i=0; i<nRow; i++) visited.push(oneRow.slice());
    }


    for (var i=0; i<nRow; i++) {
        for (var j=0; j<nCol; j++) {
            // resetVisited();
            DFS(i, j, visited, [], 0);
        }
    }

    return maxlen;


    function DFS(i, j, visited, oneAns, oneLen) {
        if (i>nRow-1 || i<0 || j>nCol-1 || j<0 || visited[i][j] === true) {
            return;
        }
        else {
            visited[i][j] = true;
            oneAns.push(matrix[i][j]);
            oneLen += 1;
            if (oneLen > maxlen) {
                result = oneAns.slice();
                maxlen = oneLen;
            }

            if (i+1<=nRow-1 && matrix[i+1][j]>matrix[i][j]) DFS(i+1, j, visited, oneAns, oneLen);
            if (i-1>=0 && matrix[i-1][j]>matrix[i][j]) DFS(i-1, j, visited, oneAns, oneLen);
            if (j+1<=nCol-1 && matrix[i][j+1]>matrix[i][j]) DFS(i, j+1, visited, oneAns, oneLen);
            if (j-1>=0 && matrix[i][j-1]>matrix[i][j]) DFS(i, j-1, visited, oneAns, oneLen);
            visited[i][j] = false;
            oneAns.pop();
        }
    }
};
