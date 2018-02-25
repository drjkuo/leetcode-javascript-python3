/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// [3,1,2,3,4,5,6]

var removeElement = function(nums, val) {
    if(nums.length === 0) return 0;
    //if(nums.indexOf(val) < 0) return nums.length;

    let newlength = 0;
    let nl = nums.length;
    for(let i=0; i<nl ; i++){
        if(nums[i] !== val) {
            nums[newlength] = nums[i];
            newlength++;
        }
    }

    return newlength;
};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums instanceof Array === false) throw new Error("input error");

    var pt = 0;
    for (var i=0; i<nums.length; i++) {
        if (nums[i] !== val) {
            nums[pt] = nums[i];
            pt += 1;
        }
    }

    return pt;
};
