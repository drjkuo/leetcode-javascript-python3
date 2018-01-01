/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    var ans = 1;
    var hash = {};
    var left = 0;
    for (var right = 0; right<s.length; right++) {
        var ch = s[right];
        if (hash[ch] !== undefined) { // repeat
            left = Math.max(left, hash[s[right]]+1);
            ans = Math.max(ans, right - left);
        }
        // else { // no repeat
        //     hash[s[right]] = right;
        // }
        hash[s[right]] = right;
        ans = Math.max(ans, right-left+1);
    }

    return ans;
};
