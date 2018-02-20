/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var ans = [];

    if (numRows === 1) return s;

    for (var i=0; i<numRows; i++) {
        ans.push("");
    }

    for (var i=0; i<s.length; i++) {
        var rowToInsert = i%(2*numRows-2);
        if (rowToInsert>=numRows) rowToInsert = (numRows-1) - rowToInsert%(numRows-1);
        ans[rowToInsert] += s[i];
    }

    return ans.join("");

};
