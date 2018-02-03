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


/**
 * @param {number} n
 * @return {number[]}
 */

// G(i) = i XOR (i/2)

var grayCode = function(n) {
    var result = [];
    for (var i=0; i< (1<<n); i++) {
        result.push(i ^ (i>>1));
    }
    return result;
};
