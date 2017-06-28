/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {
    var dic =
        { "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        };

    if (digits.length === 0) return [];
    var result = [];
    helper(dic, digits, 0, [], result);
    return result;
};

function helper (dic, digits, pos, oneAns, result) {
    if (oneAns.length === digits.length) {
        result.push(oneAns.join(''));
        return;
    }

    for (var i = 0; i < dic[digits[pos]].length; i++) { //dic[digits[pos]].length
        //Object.keys(dic[digits[pos]]).length
        var tmp = oneAns.slice();
        tmp.push(dic[digits[pos]][i]);
        pos += 1;
        helper(dic, digits, pos, tmp, result);
        pos -= 1;
    }
}
