/**
* @param {number} n
* @return {string[]}
*/
var generateParenthesis = function(n) {
    var result = [];
    helper("", result, n, 0, 0);
    return result;
};

function helper(oneAns, result, n, numLeft, numRight) {
    // terminate condition: string.length
    if (oneAns.length === n*2) {
        result.push(oneAns);
    }
    // concat “(“ first
    var tmp = oneAns.slice();
    //If the number “(“ is less than n, then tmp += “(“;
    if (numLeft < n) {
        tmp += "(";
        numLeft += 1;
        helper(tmp, result, n, numLeft, numRight);
        numLeft -= 1;
    }

    //helper ( “(“, [], 3, 1, 0);

    // concat “)”
    tmp = oneAns.slice();
    //If the number “(“ is greater than “)”, then tmp += “)“;
    if (numLeft > numRight) {
        tmp += ")";
        numRight += 1;
        helper(tmp, result, n, numLeft, numRight);
    }
    numRight -= 1;
    //helper ( ““, [], 3, 0, 0);
}
