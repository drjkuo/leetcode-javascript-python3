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


class Solution {
    public int numIslands(char[][] grid) {
        int n = grid.length;
        if (n == 0 ) return 0;
        int m = grid[0].length;
        if (m == 0) return 0;

        UnionFind UF = new UnionFind(n*m);

        int init_count = 0;
        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if (grid[i][j] == '1') init_count++;
            }
        }
        UF.SetCount(init_count);

        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if (grid[i][j] == '1') {
                    // left
                    if (j>0 && grid[i][j-1] == '1') UF.Union(m*i+j, m*i+j-1);
                    // right
                    if (j<m-1 && grid[i][j+1] == '1') UF.Union(m*i+j, m*i+j+1);
                    // up
                    if (i>0 && grid[i-1][j] == '1') UF.Union(m*i+j, m*(i-1)+j);
                    // down
                    if (i<n-1 && grid[i+1][j] == '1') UF.Union(m*i+j, m*(i+1)+j);
                }
            }
        }

        return UF.GetCount();

    }

}

class UnionFind {
    private int[] p;
    private int count;

    public UnionFind(int number) {
        p = new int[number];
        for(int i=0; i<number; i++) {
            p[i] = i;
        }
    }

    public int Find(int x) {
        if (x != p[x])
            p[x] = Find(p[x]);

        return p[x];
    }

    public void Union(int x, int y) {
        int rootx = Find(x);
        int rooty = Find(y);
        if (rootx != rooty ) {
            p[rootx] = rooty;
            count--;
        }

    }

    public int GetCount () {
        return count;
    }

    public void SetCount(int x) {
        count = x;
    }

}


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    var rowlen = grid.length;
    var collen = grid[0].length;
    var i, j;
    var result = 0;

    for (i=0; i<rowlen; i++) {
        for (j=0; j<collen; j++) {
            if (grid[i][j] === '1') {
                var q = [];
                result += 1;
                q.push([i,j]);
                while (q.length > 0) {
                    var tmp = q.shift();
                    var i1 = tmp[0], j1 = tmp[1];
                    if (i1<0 || i1>rowlen-1 ||
                        j1<0 || j1>collen-1 ||
                        grid[i1][j1] === '0')
                        continue;
                    else {
                        grid[i1][j1] = '0';
                        q.push([i1,j1+1]);
                        q.push([i1,j1-1]);
                        q.push([i1+1,j1]);
                        q.push([i1-1,j1]);
                    }
                }
            }
        }
    }

    return result;

};
