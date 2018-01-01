/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    var ans = 1;
    var hash = {};
    for (var i=0; i<s.length; i++) {
        hash[s[i]] = 1;
        var j=i+1;
        while (j<s.length && checkRepeat(s[j])) {
            j++;
        }
        ans = Math.max(ans, j-i); // j-1-i+1
    }

    function checkRepeat(ch) {
        if (hash[ch]) {
            hash = {};
            return false;
        }
        else {
            hash[ch] = 1;
            return true;
        }
    }

    return ans;
};
