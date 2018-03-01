/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var result = [];
    for (var i=1; i<=n; i++) {
        result.push(i);
    }

    result.sort(function(x,y) {
        if (x.toString() > y.toString()) return 1;
        else return -1;
    });

    return result;
};
