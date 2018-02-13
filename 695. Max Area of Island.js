/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var rowlen = grid.length, collen = grid[0].length;
    var i, j;
    var result = 0;
    for (i=0; i<rowlen; i++) {
        for (j=0; j<collen; j++) {
            if (grid[i][j] === 1) result = Math.max(result, DFS(grid, i, j));
        }
    }

    return result;


    function DFS(grid, i, j) {
        if (i<0 || i>grid.length-1 || j<0 || j>collen-1 || grid[i][j] === 0) return 0;
        grid[i][j] = 0;

        return 1 + DFS(grid, i+1, j) + DFS(grid, i-1, j) + DFS(grid, i, j+1) + DFS(grid, i, j-1);
    }

};

''
