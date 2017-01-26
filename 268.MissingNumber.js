// Runtime: 108 ms; 76%

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //sum[0....n] - sum of nums[]

    let n = nums.length;
    return n*(n+1)/2 - nums.reduce(function(a, b) { return a + b; }, 0);
};
