/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W/g, '').toLowerCase();
    if (s.length < 2) return true;

    var p1 = 0, p2 = s.length-1;
    while (p2 > p1) {
        if (s[p1] !== s[p2]) return false;
        p1 += 1;
        p2 -= 1;
    }

    return true;
};
