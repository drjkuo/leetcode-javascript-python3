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
    //var q = [];
    // console.log(typeof g[0][0]);
    for (var i=0; i<rowlen; i++) {
       for (var j=0; j<collen; j++) {
           if (g[i][j] === '1') {
               result++;
            //   console.log([i,j]);
            //   q.push([i,j]);
            // g[i][j] = g[i][j].replace("1","0");
               BFS(i,j,g,rowlen,collen);
           }
       }
    }
    return result;
};

function BFS(i,j,g,rowlen,collen) {
    var q = [];
    q.push([i,j]);
    g[i][j] = g[i][j].replace("1","0");
    while (q.length > 0) {
        var tmp = q.shift();
        // console.log(tmp);
        i = tmp[0];
        j = tmp[1];
        // g[i][j] = g[i][j].replace("1","0");
        if ((i+1)<=rowlen-1 && g[i+1][j] === '1') {
            q.push([i+1, j]);
            g[i+1][j] = g[i+1][j].replace("1","0");
        }
        if ((i-1)>=0 && g[i-1][j] === '1') {
            q.push([i-1, j]);
            g[i-1][j] = g[i-1][j].replace("1","0");
        }
        if ((j+1)<=collen-1 && g[i][j+1] === '1') {
            q.push([i, j+1]);
            g[i][j+1] = g[i][j+1].replace("1","0");
        }
        if ((j-1)>=0 && g[i][j-1] === '1') {
            q.push([i, j-1]);
            g[i][j-1] = g[i][j-1].replace("1","0");
        }
    }
    return;

}


// function DFS(i,j,g,rowlen, collen) {
//     if (g[i][j] === '1') {
//         g[i][j] = g[i][j].replace('1', '0');
//         console.log(i,j);
//         console.log(g[i][j]);
//         // console.log(g[p[0]][p[1]]);
//         if ((i+1) <= rowlen-1) {
//             DFS(i+1,j,g,rowlen, collen);
//         }
//         if ((i-1) >= 0) {
//             DFS(i-1,j,g,rowlen, collen);
//         }
//         if ((j+1) <= collen-1) {
//             DFS(i,j+1,g,rowlen, collen);
//         }
//         if ((j-1) >= 0) {
//             DFS(i,j-1,g,rowlen, collen);
//         }
//     }
// }
