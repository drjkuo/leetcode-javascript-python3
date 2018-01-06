/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans = [];
    helper([], ans, 0, 0, n, 0);
    return ans;
};

function helper(oneAns, ans, left, right, n, curLen) {
    // console.log(oneAns, ans);
    if (curLen === n*2 ) {
        var oneAnsStr = oneAns.slice().join("");
        ans.push(oneAnsStr);
        return;
    }

    var tmp = oneAns.slice();
    // left === right
    if (left < n) {
        tmp.push("(");
        helper(tmp, ans, left+1, right, n, curLen+1);
        tmp.pop();
    }

    // left > right
    if (left > right) {
        tmp.push(")");
        helper(tmp, ans, left, right+1, n, curLen+1);
    }

}
