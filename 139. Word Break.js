/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var results = [];
    helper(wordDict, [], results);

    for (var i=0; i<results.length; i++) {
        if (results[i] === s)
            return true;
    }

    return false;
};

function helper(wordDict, oneAns, results) {
    if (oneAns.length === wordDict.length) {
        results.push(oneAns.join(""));
        return;
    }
    for (var i=0; i<wordDict.length; i++) {
        var tmpWordDict = wordDict.slice(); //.splice(i,1);
        var tmpAns = oneAns.slice();
        tmpAns.push(wordDict[i]);
        helper(tmpWordDict,  tmpAns, results);
    }
}
