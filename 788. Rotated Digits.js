/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    var result = 0;
    for (var i=1; i<=N; i++) {
        if (rotated(i) === -1) continue;
        if (i !== rotated(i)) result += 1;
    }
    return result;
};

function rotated(n) {
    var rn = n.toString().split("");

    for (var i=0; i<rn.length; i++) {
        if (rn[i] === '2') rn[i] = '5';
        else if (rn[i] === '5') rn[i] = '2';
        else if (rn[i] === '6') rn[i] = '9';
        else if (rn[i] === '9') rn[i] = '6';
        else if (rn[i] === '3' || rn[i] === '4' || rn[i] === '7') return -1;
    }

    return parseInt(rn.join(""));
}
