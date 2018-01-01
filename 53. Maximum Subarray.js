/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // f[i] = (f[i-1] > 0) ? f[i-1] + nums[i] : nums[i]
    if (nums.length === 0) return 0;
    var f = [], ans = -Infinity;
    f[0] = nums[0];
    ans = nums[0];
    for (var i=1; i<nums.length; i++) {
        f[i] = (f[i-1] > 0)? f[i-1]+nums[i] : nums[i];
        ans = Math.max(ans, f[i]);
    }
    return ans;
};
