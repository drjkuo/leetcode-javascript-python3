/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // f[i] = (f[i-1] > 0) ? f[i-1] + nums[i] : nums[i]
    if (nums.length === 0) return 0;
    var f = [], ans = -Infinity;

    for (var i=0; i<nums.length; i++) {
        if (i===0) {
            f[0] = nums[0];
        }
        else {
            f[i] = (f[i-1] > 0)? f[i-1]+nums[i] : nums[i];
        }
        ans = Math.max(ans, f[i]);
    }
    return ans;
};
