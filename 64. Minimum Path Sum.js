/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var rowlen = grid.length;
    var collen = grid[0].length;
    var result = Infinity;
    var visited = [];
    var oneRow = [];
    for (var j=0; j<collen; j++) {
        oneRow.push(false);
    }
    for (var i=0; i<rowlen; i++) {
        visited.push(oneRow.slice());
    }

    DFS(grid, 0, 0, 0, visited);

    return result;

    function DFS(grid, i, j, sum, visited) {
        if (i<0 || i>rowlen-1 || j<0 || j>collen-1 || visited[i][j] === true) return;
        if (i===rowlen-1 && j===collen-1) {
            result = Math.min(result, sum+grid[i][j]);
            return;
        }
        visited[i][j] = true;
        DFS(grid, i-1, j, sum+grid[i][j], visited);
        DFS(grid, i+1, j, sum+grid[i][j], visited);
        DFS(grid, i, j+1, sum+grid[i][j], visited);
        DFS(grid, i, j-1, sum+grid[i][j], visited);
        visited[i][j] = false;
    }

};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var rowlen = grid.length;
    var collen = grid[0].length;
    var dp = [];
    for (var i=0; i<rowlen; i++) {
        dp.push([]);
        for (var j=0; j<collen; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
                continue;
            }
            if (i === 0) {
                dp[i][j] = dp[i][j-1] + grid[i][j];
                continue;
            }

            if (j === 0) {
                dp[i][j] =  dp[i-1][j] + grid[i][j];
                continue;
            }
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[i-1][j-1];
};
