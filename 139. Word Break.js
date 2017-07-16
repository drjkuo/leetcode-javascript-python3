/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // var start = 0;
    if (wordDict.length === 0) return false;
    var wordSet = new Set(wordDict);
    var dp = [];
    dp[0] = true;

    for(var i=0; i<=s.length; i++) {
        for (var j=0; j<i; j++) {
            if (dp[j] && wordSet.has(s.substring(j,i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length] === true;

};
