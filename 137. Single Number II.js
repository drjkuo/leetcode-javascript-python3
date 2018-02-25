/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0;
    for (var i=0; i<32; i++) {
        var sum = 0;
        for (var j=0; j<nums.length; j++) {
            sum += (nums[j] >> i) & 1;
        }
        result += (sum%3) << i;
    }

    return result;
};
