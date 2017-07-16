/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    if (wordDict.length === 0) return false;

    return helper(wordDict, 0, s);


};

function helper(wordDict, start, s) {

    if (start === s.length) {
        return true;
    }
    var idx;
    // var err = 0;
    for (var i=0; i<wordDict.length; i++) {
        console.log('start:', start);
        idx = s.substring(start).indexOf(wordDict[i]);
        console.log(wordDict[i]);
        console.log(idx, ";", idx+ (wordDict[i]).length);
        if (idx === 0) {
            return helper(wordDict, start+idx+(wordDict[i]).length, s);
        }
        else {
            // err++;
            continue;
        }
    }

    return false;

}
