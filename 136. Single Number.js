/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums === null || (nums instanceof Array) === false) throw new Error("Input error");
    if (nums.length === 0) return 0;

    var result = nums[0];

    for (var i=1; i<nums.length; i++) {
        result = result ^ nums[i];
    }

    return result;
};
