/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var pre = [1];
    var cur = [];
    for (var i=0; i<=rowIndex; i++) {
        for (var j=0; j<=i; j++) {
            cur[j] = (pre[j-1] || 0) + (pre[j] || 0)
        }
        pre = cur.slice();
    }
    return cur;
};
