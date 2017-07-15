/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var results = [];
    if (wordDict.length === 0) return false;
    // if (helper(wordDict, "", s)) return true;

    helper(wordDict, "", s, results);
    for (var i=0; i<results.length; i++) {
        if (results[i] === s)
            return true;
    }

    return false;
};

function helper(wordDict, oneAns, s, results) {
    // if oneAns.join("") ===
    // console.log(typeof oneAns);
    if (oneAns.length === s.length) {
        results.push(oneAns);
        return;
    }

    if (oneAns.length > s.length) {
        return;
    }

    for (var i=0; i<wordDict.length; i++) {
        // var tmpWordDict = wordDict.slice(); //.splice(i,1);
        // var tmpAns = oneAns.slice();
        var tmpAns = oneAns + wordDict[i];
        // console.log(tmpAns);
        helper(wordDict, tmpAns, s, results);

    }
}
