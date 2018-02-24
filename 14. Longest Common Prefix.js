/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs instanceof Array === false) throw new Error("input error");
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    var i,j;
    var minL = Infinity, minS = "";
    for (i=0; i<strs.length; i++) {
        if (strs[i].length < minL) {
            minS = strs[i];
            minL = strs[i].length;
        }
    }

    outer_loop:
    for (i=0; i<minL; i++) {
        for (j=0; j<strs.length; j++) {
            if (minS[i] !== strs[j][i]) {
                break outer_loop;
            }
        }
    }

    return minS.substring(0, i);

};


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs instanceof Array === false) throw new Error("input error");
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    for (var i=0; i<strs[0].length; i++) {
        for (var j=0; j<strs.length-1; j++) {
            if (i>=strs[j].length || i>=strs[j+1].length || strs[j][i] !== strs[j+1][i])
                return strs[0].substring(0, i);
        }
    }

    return strs[0];


};
