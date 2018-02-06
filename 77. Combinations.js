/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [], oneAns = [];
    helper(result, oneAns, 0, 0, n, k);
    return result;

};

function helper(result, oneAns, level, pos, n, k) {
    if (level === k) {
        result.push(oneAns.slice());
        return;
    }

    for (var i=pos; i<n; i++) {
        oneAns.push(i+1);
        helper(result, oneAns, level+1, i+1, n, k);
        oneAns.pop();
    }

}
