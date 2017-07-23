/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var ans = [];
    var tmp = [1];
    var now = [];
    var i, j;
    for (i=0; i<numRows; i++) {
        for (j=0; j<=i; j++) {
            now[j] = (tmp[j-1] || 0) + (tmp[j] || 0);
        }
        ans.push(now);
        tmp = now.slice();
        now = [];
    }
    return ans;
};
