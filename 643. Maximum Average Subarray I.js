/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var ans = Number.NEGATIVE_INFINITY;
    var tmp = 0;
    var i;
    for (i=0; i<k; i++) {
        tmp += nums[i];
    }
    ans = Math.max(ans, tmp);

    for (i=k; i<nums.length; i++) {
        tmp = tmp+nums[i]-nums[i-k];
        ans = Math.max(ans, tmp);
    }
    return ans/k;

};
