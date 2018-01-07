/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ans = [];
    helper ([], ans, nums, [], 0);
    return ans;
};

function helper (oneAns, ans, nums, visited, curLen) {
    if (curLen === nums.length) {
        ans.push(oneAns.slice());
    }

    for (var i=0; i<nums.length; i++) {
        if (visited.indexOf(nums[i]) !== -1) continue;

        var tmp = oneAns.slice();
        tmp.push(nums[i]);
        var tmp2 = visited.slice();
        tmp2.push(nums[i]);
        helper(tmp, ans, nums, tmp2, curLen+1);
    }
}
