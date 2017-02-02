/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //max[i] = nums[i] + max[i-2] or max[i-1]
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length <= 2) return Math.max(nums[0], nums[1]);

    let max = [];
    max[0] = nums[0];
    max[1] = Math.max(nums[0], nums[1]);
    for (let i=2; i<nums.length; i++)
    {
        max[i] = Math.max((nums[i] + max[i-2]), max[i-1]);
    }

    return max.pop();
};
