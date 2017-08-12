/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // reverse n
    var ans = 0;
    for (var i=0; i<32; i++) {
        ans = ans << 1 | (n&1);
        n = n >> 1;
    }

    // signed to unsigned
    var fans = 0;
    for (i=0; i<32; i++) {
        var tmp = (ans&1)? Math.pow(2,i) : 0;
        fans += tmp;
        ans = ans >> 1;
    }
    return (fans);
};
