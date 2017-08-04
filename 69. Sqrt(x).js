/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    var start = 1;
    var end = x;
    var mid = parseInt((start + end)/2);

    while (start+1 < end) {
        if ((mid*mid) < x) {
            start = mid;
            mid = parseInt((start + end)/2);
        }
        if ((mid*mid) > x) {
            end = mid;
            mid = parseInt((start + end)/2);
        }
        if ((mid*mid) === x) {
            return mid;
        }
    }
    return start;
};
