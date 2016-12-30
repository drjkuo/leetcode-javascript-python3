/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let x = grid[0].length;
    let y = grid.length;
    let ans = 0;
    for (let j=0; j<y; j=j+1)
    {
        for (let i=0; i<x; i=i+1)
        {
            if (grid[j][i] === 1)
            {   // consider peripheral grids and inner grids
                if (j === 0 || grid[j-1][i] === 0) ans++; // upper edge of the current grid
                if (j === y-1 || grid[j+1][i] === 0) ans++; //lower edge
                if (i === 0 ||grid[j][i-1] === 0) ans++; //left edge
                if (i === x-1 || grid[j][i+1] === 0) ans++; //right edge
            }
        }
    }

    return ans;
};
