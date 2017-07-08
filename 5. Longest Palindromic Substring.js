/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var maxLen = 1;
    var maxStart = 0;
    var maxEnd = 0;
    for (var i = 0; i < s.length; i++) {
        var [tmpStart, tmpEnd, tmpLen] = checkPalindrome(s, i);
        // console.log(i);
        console.log(i,tmpStart, tmpEnd, tmpLen);
        if ( tmpLen > maxLen) {
            maxStart = tmpStart;
            maxEnd = tmpEnd;
        }
    }

    return s.substring(maxStart, maxEnd+1);
};

function checkPalindrome (s, index) {
    var len = s.length;
    var start = 0;
    var end = 0;
    for (var i = 0; (index + i) <= len-1 && (index - i) >= 0; i++) {
        if (s[index+i] === s[index-i]) {
            start = index - i;
            end = index + i;
        }
        else {
            break;
        }
    }
    return [start, end, end-start+1];
}
