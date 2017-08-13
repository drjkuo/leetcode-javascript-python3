/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var ans = [0];

    for (var i=0; i<n; i++) {
        var toBePush = ans.slice().reverse().map(function(x) {
            return x + Math.pow(2,i);
        })
        ans.push(...toBePush);
    }

    return ans;

};
