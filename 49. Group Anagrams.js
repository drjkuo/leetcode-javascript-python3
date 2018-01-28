/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var len = strs.length, i;
    var hash = {}, sortedStr;
    function sortingfunc(x,y) {
        if (x>y) return 1;
    }
    for (i=0; i<len; i++) {
        sortedStr = strs[i].split("").sort(sortingfunc).join("");
        hash[sortedStr] = hash[sortedStr] || [];
        hash[sortedStr].push(strs[i]);
    }

    var result = [];
    for (i in hash) {
        result.push(hash[i]);
    }
    return result;

};
