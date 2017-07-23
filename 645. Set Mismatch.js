/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var tmp = {};
    for (var i=0; i<nums.length; i++) {
        tmp[nums[i]] = (tmp[nums[i]] || 0);
        tmp[nums[i]]++;
    }
    var ans = [];
    for (var j in tmp) {
        if (tmp[j] > 1) ans[0] = parseInt(j);
    }

    var len = nums.length;
    var sum = 0;
    for (var i=0; i<len; i++) {
        sum += nums[i];
    }
    ans[1] = (1+len)*len/2 - sum + ans[0];

    return ans;
};
