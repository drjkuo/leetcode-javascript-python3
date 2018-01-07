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
        var num = nums[i];
        if (visited[i] !== undefined) continue;

        var tmp = oneAns.slice();
        tmp.push(num);
        var tmp2 = visited.slice();
        tmp2[i] = true;
        helper(tmp, ans, nums, tmp2, curLen+1);
    }
}
