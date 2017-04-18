/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var s = num.toString();
    console.log(s);
    var len = s.length;
    for (var i=0; i<=parseInt(len/2); i++) {
        if (digitStrobogrammatic(parseInt(s[i]), parseInt(s[len-1-i])) === false) {
            console.log(s[i], s[len-1-i]);
            return false;
        }
    }

    return true;
};

function digitStrobogrammatic (a, b) {
    if (a === 0 && b === 0) return true;
    if (a === 1 && b === 1) return true;
    if (a === 8 && b === 8) return true;
    if (a === 6 && b === 9) return true;
    if (a === 9 && b === 6) return true;

    return false;
}
