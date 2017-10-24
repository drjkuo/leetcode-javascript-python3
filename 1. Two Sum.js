/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    for (var i=0; i<nums.length; i++) {
        hash[nums[i]] = i;
    }

    for (i=0; i<nums.length; i++) {
        if (hash[target-nums[i]] > 0) {
            return [ i, hash[target-nums[i]] ];
        }
    }


};
