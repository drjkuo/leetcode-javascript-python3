/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    for (var i=0; i<len; i++) {
        if (nums[i] === 0) {
            nums.splice(i,1);
            nums.push(0);
            i--;
            len--;
        }
    }
    return;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var nonzerolen = 0, i;
    for (i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
          nums[nonzerolen] = nums[i];
          nonzerolen+=1;
        }
    }

    while (nonzerolen < nums.length) {
        nums[nonzerolen] = 0;
        nonzerolen += 1;
    }

    return;
};
