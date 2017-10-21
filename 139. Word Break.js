/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var allWord = [];
    var slen = s.length;
    helper(allWord, "", wordDict, 0);
    console.log(allWord);
    return (allWord.length > 0)? true : false;


    function helper(allWord, oneWord, wordDict, curlen) {
        if (curlen === slen) {
            if (oneWord === s) {
                allWord.push(oneWord);
            }
            return;
        }

        for(var i=0; i<wordDict.length; i++) {
            var wordDictMod = wordDict.slice();
            var oneWordMod = oneWord.slice();
            oneWordMod += wordDict[i];
            wordDictMod.splice(wordDictMod.indexOf(wordDict[i]),1);
            helper(allWord, oneWordMod, wordDictMod, curlen+wordDict[i].length);
        }
    }
};
