/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var scanFromLeft = [];
    var scanFromRight = [];

    var i;
    var product = 1;
    scanFromLeft.push(1);
    for (i=1; i<nums.length; i++) {
        product *= nums[i-1];
        scanFromLeft.push(product);
    }

    product = 1;
    scanFromRight.unshift(1);
    for (i=(nums.length-1)-1; i>=0; i--) {
        product *= nums[i+1];
        scanFromRight.push(product);
    }

    var ans = [];
    for (i=0; i<nums.length; i++) {
        ans.push(scanFromLeft[i]*scanFromRight[nums.length-1-i])
    }

    return ans;
};
