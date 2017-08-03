/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    var sqrt = Math.sqrt(x);
    for (var i=1; i<=sqrt; i++) {
        if ((x >= i*i) && (x < (i+1)*(i+1))) {
            return i;
        }
    }
};
