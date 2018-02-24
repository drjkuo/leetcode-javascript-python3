/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var carry, add;
    while(b !== 0) {
        carry = a&b;
        add = a^b;
        carry = carry<<1;
        a = add;
        b = carry;
    }

    return a;
};
