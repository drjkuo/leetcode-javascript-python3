class Solution {
    public int p[];
    public int count;

    public int find(int x) {
        if (x != p[x]) p[x] = find(p[x]);
        return p[x];
    }

    public void union(int x, int y) {
        int rootx = p[x];
        int rooty = p[y];
        if (rootx != rooty) {
            p[y] = rootx;
            count--;
        }
    }

    public int findCircleNum(int[][] M) {

        int rowNum = M.length;;
        count = rowNum;
        p = new int[rowNum];

        for(int i=0; i<rowNum; i++) p[i] = i;

        for(int i=0; i<rowNum; i++) {
            for(int j=i+1; j<rowNum; j++) {
                System.out.print(i+""+j+"\n");
                if (M[i][j] == 1) {
                    union(i, j);
                }
            }
        }

        return count;
    }

}

// Java
class Solution {
    public int p[];

    public int find(int x) {
        if (x != p[x]) p[x] = find(p[x]);
        return p[x];
    }

    public void union(int x, int y) {
        int rootx = find(x);
        int rooty = find(y);
        if (rootx != rooty) {
            p[rooty] = rootx;
        }
    }

    public int findCircleNum(int[][] M) {

        int rowNum = M.length;

        p = new int[rowNum];

        for(int i=0; i<rowNum; i++) p[i] = i;

        for(int i=0; i<rowNum; i++) {
            for(int j=i+1; j<rowNum; j++) {

                if (M[i][j] == 1) {
                    union(i, j);
                }
            }
        }

        Set<Integer> s = new HashSet<Integer>();
        for(int i=0; i<rowNum; i++) s.add(find(i));

        return s.size();
    }

}


/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    var p = [];


    function find(x) {
        if (x !== p[x]) {
            p[x] = find(p[x]);
        }
        return p[x];
    }

    function union(x,y) {
        var rootx = find(x);
        var rooty = find(y);
        if (rootx !== rooty) {
            p[rooty] = rootx;
            return true; // unioned
        }
        return false; // need not union
    }

    var len = M.length;

    // initialize p
    for (var i=0; i<len; i++) p[i] = i;

    // traverse M
    for (var i=0; i<len; i++) {
        for (var j=i+1; j<len; j++) {
            if (M[i][j] === 1) union(i,j);
            // console.log(p);
        }
    }

    var s = new Set();
    for (var i=0; i<len; i++) s.add(find(i));

    return s.size;


};
