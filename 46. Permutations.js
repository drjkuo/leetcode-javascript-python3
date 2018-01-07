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
        return;
    }

    for (var i=0; i<nums.length; i++) {
        var num = nums[i];
        if (visited[i] === true) continue;

        oneAns.push(num);
        visited[i] = true;
        helper(oneAns, ans, nums, visited, curLen+1);
        oneAns.pop();
        visited[i] = false;
    }
}
