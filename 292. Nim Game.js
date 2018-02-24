/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if (typeof n !== "number" || n < 0) throw new Error("input error");

    return (n%4 > 0)? true : false;

};
