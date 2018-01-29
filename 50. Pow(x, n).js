/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x === 0) return 0;

    if (n < 0) return 1/myPow(x, -n);

    if (n === 0) return 1;

    if (n > 0) {
        return myPow(x, n-1) * n;
        // var floor = myPow(x, Math.floor(n/2));
        // if (n%2 === 0) return floor * floor;
        // else return floor * floor * x;
    }
};
