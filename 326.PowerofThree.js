/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // log3(x)===int

    let ans = Number.isInteger(Math.log(n)/Math.log(3));
    console.log(Math.log(n)/Math.log(3));
    return ans;
};
