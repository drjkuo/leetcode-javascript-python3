/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    var g = grid.slice();
    var rowlen = g.length;
    var collen = g[0].length;
    var result = 0;
    // console.log(typeof g[0][0]);
    for (var i=0; i<rowlen; i++) {
       for (var j=0; j<collen; j++) {
           if (g[i][j] === '1') {
               result++;
            //   console.log([i,j]);
               DFS(i,j,g,rowlen,collen);
           }
       }
    }

    return result;
};

function DFS(i,j,g,rowlen, collen) {
    if (g[i][j] === '1') {
        g[i][j] = g[i][j].replace('1', '0');
        console.log(i,j);
        console.log(g[i][j]);
        // console.log(g[p[0]][p[1]]);
        if ((i+1) <= rowlen-1) {
            DFS(i+1,j,g,rowlen, collen);
        }
        if ((i-1) >= 0) {
            DFS(i-1,j,g,rowlen, collen);
        }
        if ((j+1) <= collen-1) {
            DFS(i,j+1,g,rowlen, collen);
        }
        if ((j-1) >= 0) {
            DFS(i,j-1,g,rowlen, collen);
        }
    }
}
