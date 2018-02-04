/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    var p = [];
    var accLen = accounts.length;
    for (var i=0; i<accLen; i++) p[i] = i;

    function find(x) {
        if (x !== p[x]) p[x] = find(p[x]);
        return p[x];
    }

    function same(x,y) {
        return find(x) === find(y);
    }

    function union(x,y) {
        var rootx = find(x);
        var rooty = find(y);
        if (rootx !== rooty) p[rooty] = rootx;
    }

    for (var i=0; i<accLen; i++) {
        for (var j=0; j<accLen; j++) {
            if (accounts[i][0] === accounts[j][0]) {
                for(var k=1; k<accounts[i].length; k++) {
                    for(var h=1; h<accounts[j].length; h++) {
                        if (accounts[i][k] === accounts[j][h]) union(i,j);
                    }
                }
            }
        }
    }

    var s = new Set();
    for(var i=0; i<p.length; i++) s.add(find(i));

    var result = [];
    var tmp = new Set();
    for(var n of s) {
        for (var i=0; i<accounts.length; i++) {
            if (find(i) === n) {
                for(var j=0; j<accounts[i].length; j++)
                    tmp.add(accounts[i][j])
            }
        }
        result.push(Array.from(tmp).sort());
        tmp = new Set();
    }

    return result;

};
