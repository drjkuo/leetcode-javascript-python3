/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var result = [];
    if (k===0 || n===0) return result;

    helper(result, [], 1, k, n);
    return result;

    function helper(result, oneAns, pos, leftk, leftn) {
        if (leftk===0 && leftn===0) {
            result.push(oneAns.slice());
            return;
        }

        if (pos>9 || leftn<=0 || leftk<=0) return;

        for(var i=pos; i<=9; i++) {
            oneAns.push(i);
            helper(result, oneAns, i+1, leftk-1, leftn-i);
            oneAns.pop();
        }
    }
};
