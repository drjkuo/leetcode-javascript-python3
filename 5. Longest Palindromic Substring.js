/**
 * @param {string} s
 * @return {string}
 */

var ans="";

var longestPalindrome = function(s) {

    for (var i = 0; i < s.length; i++) {
        onePalindrome (s, i, i);
        console.log('single',ans);
    }

    for (var i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i+1]) {
            onePalindrome (s, i, i+1);
            console.log(ans);
        }
    }

    return ans;
};

function onePalindrome (s, start, end) {
    while (start >=0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }

    var cur = s.substring(start+1, end);

    if (cur.length > ans.length) {
        ans = cur.slice();
    }

}
