/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var ans = ["0", "1"]; // 2nd ["11", "10"]
    for (var i=1; i<n; i++) {
        var toBePush = ans.slice().reverse().map(function(x) {
           return String(1).concat(x);
        });
        ans.push(...toBePush);

        console.log(ans);
    }
    return ans.map(function(x) {
        parseInt(x,2)
    });
};
