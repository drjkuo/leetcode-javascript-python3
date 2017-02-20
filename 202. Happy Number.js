/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = {};

    while ((map[n] !== 1) && (n !== 1)) {
        var sum = 0;
        map[n] = 1;
        var arr = n.toString().split("");

        for (var i=0; i<arr.length; i++) {
            sum = sum + (arr[i]*arr[i]);
        }
        n = sum;
    }

    return (n === 1);
};
