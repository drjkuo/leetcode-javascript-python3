/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length <= 1) return nums;

    var leftToRight = [];
    leftToRight.push(1);
    var product=1;
    for (var i=1; i<nums.length; i++) {
        product = nums[i-1]*product;
        leftToRight.push(product);
    }
    console.log(leftToRight);

    var rightToLeft = [];
    rightToLeft.push(1);
    product=1;
    for (var i=1; i<nums.length; i++) {
        product = nums[nums.length-i]*product;
        rightToLeft.push(product);
    }
    console.log(rightToLeft);

    for (var i=0; i<nums.length; i++) {
        leftToRight[i] = leftToRight[i] * rightToLeft[nums.length-i-1];
    }

    return leftToRight;



};
