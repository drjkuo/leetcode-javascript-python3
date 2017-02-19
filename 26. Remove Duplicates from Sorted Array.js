/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    var ans = 1;
    var nl = nums.length;
    for (var i=1; i<nl; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[ans] = nums[i];
            ans = ans + 1;
        }
    }

    return ans;
};
