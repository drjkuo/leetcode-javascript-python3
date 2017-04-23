/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort(cmp);
    // console.log(nums);
    var ans =0;
    for (var i=0; i<nums.length; i=i+2) {
        ans += nums[i];
    }
    return ans;
};


function cmp (a,b) {
    if (a<b) return -1;
    if (a>b) return 1;
    if (a===b) return 0;
}
