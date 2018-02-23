/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums === null) throw new Error("input is null");
    var nlen = nums.length, result = [];
    helper(result, [], 0);
    return result;

    function helper(result, oneAns, pos) {
        result.push(oneAns.slice());
        if (pos === nlen) return;
        for (var i=pos; i<nlen; i++) {
            oneAns.push(nums[i]);
            helper(result, oneAns, i+1);
            oneAns.pop();
        }
    }
};
