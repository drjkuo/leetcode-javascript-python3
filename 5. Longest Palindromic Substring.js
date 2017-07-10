/**
 * @param {string} s
 * @return {string}
 */



var longestPalindrome = function(s) {
    var ans="";

    if(s === null || s.length === 0){
        return "";
    }


    for (var i = 0; i < s.length; i++) {
        onePalindrome (s, i, i);
        onePalindrome (s, i, i+1);
        // console.log('single',ans);
    }

    return ans;

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
};
